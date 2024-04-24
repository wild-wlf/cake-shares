import React from "react";
import LoginSignupModal from "../loginSignupModal";

const LoginAsBuyerModal = ({ handleLoginModal }) => {
  return (
    <div>
      <LoginSignupModal handleBuyerModal={handleLoginModal} />
    </div>
  );
};

export default LoginAsBuyerModal;
