import { setSeenMessage } from './socketConnection';

export const updateDirectChatHistoryIfActive = data => {
  const { participants, message, conversationId, user, userInfo, setChatMessages } = data;

  const loggedInUser = user;
  const receiverId = userInfo?._id;
  const usersInConversation = [receiverId, loggedInUser._id];

  if (participants) {
    updateDirectChatHistoryIfSameConversationActive({
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

const updateDirectChatHistoryIfSameConversationActive = ({
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
  if (loggedInUser?._id === message?.receiver?._id) {
    setSeenMessage({
      conversationId,
      user: loggedInUser?._id,
      message,
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
