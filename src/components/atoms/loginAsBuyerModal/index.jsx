import React from "react";
import LoginSignupModal from "../loginSignupModal";

const LoginAsBuyerModal = ({
  handleLoginModal,
  handleSellerLoginModal,
  type,
}) => {
  return (
    <LoginSignupModal
      handleBuyerModal={handleLoginModal}
      handleSellerLoginModal={handleSellerLoginModal}
      type={type}
    />
  );
};

export default LoginAsBuyerModal;
