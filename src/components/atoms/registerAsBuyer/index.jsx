import React from "react";
import LoginSignupModal from "../loginSignupModal";

const RegisterAsBuyer = ({ handleBuyerModal }) => {
  return (
    <div>
      <LoginSignupModal handleBuyerModal={handleBuyerModal} />
    </div>
  );
};

export default RegisterAsBuyer;
