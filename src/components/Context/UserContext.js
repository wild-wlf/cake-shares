import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [buyerRegistrationData, setBuyerRegistrationData] = useState({});
  const [registermodal, setRegisterModal] = useState(false);
  const [buyermodal, setBuyerModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [completeRegistrationModal, setCompleteRegistrationModal] =
    useState(false);

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
  };

  function buyerRegistration(elem) {
    setBuyerRegistrationData((prev) => ({ ...prev, ...elem }));
  }
  console.log("buyerDetails : ", buyerRegistrationData);
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
