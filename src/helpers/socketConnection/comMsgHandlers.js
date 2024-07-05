import { setComSeenMsg } from './socketConnection';

export const updateChatIfActive = data => {
  const { participants, message, conversationId, user, setChatMessages } = data;

  const loggedInUser = user;
  const usersInConversation = [...participants, loggedInUser._id];

  if (participants) {
    updateChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      message,
      conversationId,
      loggedInUser,
      setChatMessages,
    });
  } else {
    console.error('error is in updateDirectChatHistoryIfActive');
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  message,
  conversationId,
  loggedInUser,
  setChatMessages,
}) => {
  if (!Array.isArray(participants) || !Array.isArray(usersInConversation)) {
    console.error('Participants or Users in Conversation is not an array');
  }

  const allParticipantsIncluded = participants.every(participantId => usersInConversation.includes(participantId));

  if (!allParticipantsIncluded) return;
  if (loggedInUser?._id !== message?.author?._id) {
    setComSeenMsg({
      conversationId,
      user: loggedInUser?._id,
      messageId: message?._id,
      type: 'user',
    });
  }

  setChatMessages(prev => {
    return removeDuplicates([...prev, message], '_id');
  });
};

function removeDuplicates(array, propertyName) {
  return Object.values(
    array.reduce(function (unique, current) {
      if (!unique[current[propertyName]]) {
        unique[current[propertyName]] = current;
      }
      return unique;
    }, {}),
  );
}
