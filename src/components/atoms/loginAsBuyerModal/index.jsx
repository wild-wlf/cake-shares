import React from "react";
import LoginSignupModal from "../loginSignupModal";

const LoginAsBuyerModal = ({
  handleLoginModal,
  handleSellerLoginModal,
  type,
}) => {
  return (
    <div>
      <LoginSignupModal
        handleBuyerModal={handleLoginModal}
        handleSellerLoginModal={handleSellerLoginModal}
        type={type}
      />
    </div>
  );
};

export default LoginAsBuyerModal;
