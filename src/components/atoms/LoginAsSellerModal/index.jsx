import React from 'react';
import LoginSignupModal from '../loginSignupModal';

const LoginAsSellerModal = ({
  handleRegisterModal,
  handleLoginModal,
  handleSellerLoginModal,
  handleSellerRegisterModal,
  registrationData,
  setRegistrationData,
  setModal,
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
      setModal={setModal}
    />
  );
};

export default LoginAsSellerModal;
