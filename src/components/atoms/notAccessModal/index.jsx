import React from "react";
import { Wrapper } from "./notAccessModal.style";
import Button from "../Button";

const NotAccess = ({ handleCloseModal }) => {
  return (
    <Wrapper>
      <div>
        <h3>You Cannot Access Community Chat!</h3>
        <span>
          Looks like you&apos;re not part of the CakeShares fam yet! Register
          for free to use this feature.
        </span>
      </div>
      <div className="btnWrapper">
        <Button
          rounded
          md
          btntype="white"
          width="170"
          onClick={handleCloseModal}
        >
          Cancel
        </Button>
        <Button rounded md btntype="primary" width="170">
          Register Account
        </Button>
      </div>
    </Wrapper>
  );
};

export default NotAccess;
