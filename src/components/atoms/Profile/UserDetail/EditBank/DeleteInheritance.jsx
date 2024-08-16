import React, { useState } from 'react';
import { StyledEditForm } from './EditForm.styles';
import Button from '@/components/atoms/Button';
import userService from '@/services/userService';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { useMenuState } from '@szhsin/react-menu';
import Toast from '@/components/molecules/Toast';

const DeleteInheritance = ({ id, onClose, setSuccessModal }) => {
  const { setPermission } = useContextHook(AuthContext, v => ({
    setPermission: v.setPermission,
  }));

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await userService.deleteInheritance(id);
      setSuccessModal(true);
      onClose();
      setPermission(true);
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <StyledEditForm>
      <strong className="subTitle">Delete Inheritance!</strong>
      <span className="discreption">Are you sure you want to delete this Inheritance?</span>
      <div className="buttonWrap">
        <Button
          type="white"
          rounded
          sm
          width
          onClick={() => {
            onClose();
          }}>
          No
        </Button>
        <Button loader={isLoading} rounded sm width type="danger" onClick={onSubmit}>
          Yes,Delete
        </Button>
      </div>
    </StyledEditForm>
  );
};

export default DeleteInheritance;
