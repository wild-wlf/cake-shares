import React from "react";
import { Wrapper } from "./inheritenceaddedmodal.style";
import Button from "../Button";
import Link from "next/link";

const InheritenceAddedModal = () => {
  return (
    <Wrapper>
      <h3>Inheritance Added Successfully!</h3>
      <Link href={"/"}>
        <Button rounded md btntype="primary" width="170">
          Go To Home
        </Button>
      </Link>
    </Wrapper>
  );
};

export default InheritenceAddedModal;
