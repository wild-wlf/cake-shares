import React, { useState, useEffect } from 'react';
import CheckBox from '../../CheckBox';
import { castPoolVote } from '@/helpers/socketConnection/socketConnection';
import PoleProgress from './PoleProgress';

const PoleOption = ({ type, name, users, user, option_id, messageId, receivers, allow_multiple, isAnonymous }) => {
  const [checked, setChecked] = useState(false);

  const handleVote = e => {
    setChecked(e.isChecked);
    castPoolVote({
      option_id,
      msg_id: messageId,
      user_id: user?._id,
      checked: e.isChecked,
      type: 'user',
      allow_multiple,
      isAnonymous,
    });
  };

  useEffect(() => {
    setChecked(users?.some(u => u._id === user?._id));
  }, [users]);

  const calculateProgressValues = totalVotes => {
    const totalReceivers = receivers?.length + 1;
    const percentage = ((totalVotes / totalReceivers) * 100)?.toFixed();
    return parseInt(percentage);
  };

  return (
    <>
      <CheckBox
        type="radio"
        onChange={handleVote}
        color={type}
        label={name}
        fieldName={name}
        checked={checked}
        value={name}
        name={allow_multiple ? name : `vote_${messageId}`}
      />
      <PoleProgress value={users?.length > 0 ? calculateProgressValues(users?.length) : 0} />
      <span className="totalVotes">{users?.length} votes</span>
    </>
  );
};

export default PoleOption;
