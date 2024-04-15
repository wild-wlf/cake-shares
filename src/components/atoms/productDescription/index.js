import React from "react";
import { Wrapper } from "./productDescription.style";
import Button from "../Button";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { RiFilePaperFill } from "react-icons/ri";

const index = () => {
  return (
    <Wrapper>
      <div className="btnwrapper">
        <Link href="/">
          <Button rounded sm btntype="blue" className="button">
            <IoIosArrowBack />
            Go Back
          </Button>
        </Link>
        <Button rounded sm btntype="green" className="button">
          Initiate Investment
          <RiFilePaperFill />
        </Button>
      </div>
    </Wrapper>
  );
};

export default index;
