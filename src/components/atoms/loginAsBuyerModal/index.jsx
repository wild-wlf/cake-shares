import React from "react";
import LoginSignupModal from "../loginSignupModal";

const LoginAsBuyerModal = ({
  handleRegisterModal,
  handleLoginModal,
  handleSellerLoginModal,
  handleSellerRegisterModal,
  type,
}) => {
  return (
    <LoginSignupModal
      handleRegisterModal={handleRegisterModal}
      handleBuyerModal={handleLoginModal}
      handleSellerLoginModal={handleSellerLoginModal}
      handleSellerRegisterModal={handleSellerRegisterModal}
      type={type}
    />
  );
};

export default LoginAsBuyerModal;
