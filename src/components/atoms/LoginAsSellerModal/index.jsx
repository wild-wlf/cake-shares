import React from 'react';
import LoginSignupModal from '../loginSignupModal';

const LoginAsSellerModal = ({
  handleRegisterModal,
  handleLoginModal,
  handleSellerLoginModal,
  handleSellerRegisterModal,
  registrationData,
  setRegistrationData,

  type,
}) => {
  return (
    <LoginSignupModal
      handleRegisterModal={handleRegisterModal}
      handleBuyerModal={handleLoginModal}
      handleSellerLoginModal={handleSellerLoginModal}
      handleSellerRegisterModal={handleSellerRegisterModal}
      type={type}
      registrationData={registrationData}
      setRegistrationData={setRegistrationData}
    />
  );
};

export default LoginAsSellerModal;
