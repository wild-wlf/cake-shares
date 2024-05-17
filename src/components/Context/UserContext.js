import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [buyerDetails, setBuyerDetails] = useState({});
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
    setBuyerDetails,
  };
  console.log("buyerDetails : ", buyerDetails);
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
