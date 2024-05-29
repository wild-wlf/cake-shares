import React from "react";
import { HandleLoginModalWrapper } from "./HandleLoginModal.styles";
import Image from "next/image";
import InfoIcon from "../../../_assets/info-icon.svg";
import Button from "@/components/atoms/Button";
import close from "../../../_assets/close.svg";

const HandleLoginModal = ({ setOpen }) => {
  return (
    <HandleLoginModalWrapper>
      <Image
        src={InfoIcon}
        alt="Info Icon"
        className="InfoIcon"
      />
      <span>
        You are not currently logged in. Please log in to proceed with this
        action.
      </span>
      <div className="btn-holder">
        <Button
          type="success"
          color="success"
          rounded
          width="290"
          onClick={() => setOpen(false)}
        >
          Close
          <Image src={close} alt="arrow" />
        </Button>
      </div>
    </HandleLoginModalWrapper>
  );
};

export default HandleLoginModal;
