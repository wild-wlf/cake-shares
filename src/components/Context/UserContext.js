import { getCookie } from '@/helpers/common';
import { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [buyerRegistrationData, setBuyerRegistrationData] = useState({});
  const [loginmodal, setLoginModal] = useState(false);
  const [registermodal, setRegisterModal] = useState(false);
  const [buyermodal, setBuyerModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [completeRegistrationModal, setCompleteRegistrationModal] = useState(false);

  const contextValue = {
    registermodal,
    setRegisterModal,
    buyermodal,
    setBuyerModal,
    passwordModal,
    setPasswordModal,
    completeRegistrationModal,
    setCompleteRegistrationModal,
    buyerRegistration,
    buyerRegistrationData,
    setBuyerRegistrationData,
    loginmodal,
    setLoginModal,
  };

  function buyerRegistration(elem) {
    setBuyerRegistrationData(prev => ({ ...prev, ...elem }));
  }
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
