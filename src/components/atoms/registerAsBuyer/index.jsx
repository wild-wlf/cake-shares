import React from "react";
import LoginSignupModal from "../buyerloginSignupModal";

const RegisterAsBuyer = ({ handleBuyerModal, type }) => {
  return <LoginSignupModal handleBuyerModal={handleBuyerModal} type={type} />;
};

export default RegisterAsBuyer;
