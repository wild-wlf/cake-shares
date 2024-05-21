import React from "react";
import LoginSignupModal from "../loginSignupModal";

const RegisterAsBuyer = ({ handleBuyerModal, type }) => {
  return <LoginSignupModal handleBuyerModal={handleBuyerModal} type={type} />;
};

export default RegisterAsBuyer;
