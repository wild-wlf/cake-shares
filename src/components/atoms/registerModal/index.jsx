import React, { useState } from "react";
import { Container, OptionsWrapper, Option } from "./registerModal.style";
import Image from "next/image";
import Buyer from "../../../_assets/buyer.svg";
import Seller from "../../../_assets/seller.svg";
import Button from "../Button";

const index = ({ handleRegisterModal }) => {
  // const [register, setRegister] = useState("register");

  // const handleRadioChecked = (e) => {
  //   const { name } = e.target;

  //   setRegister(name);
  // };
  const [selectedOption, setSelectedOption] = useState("bank");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Container>
        <span className="heading">Select Account Type</span>

        <OptionsWrapper>
          <Option onClick={() => handleOptionSelect("bank")}>
            <div className="imgContainer">
              <Image src={Buyer} alt="buyer" />
            </div>
            <div className="textContainer">
              <span className="optionName">Register as Buyer</span>
              <p>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun 1500.
              </p>
            </div>

            <div className="custom-radio">
              <input
                type="radio"
                id="bank"
                checked={selectedOption === "bank"}
                onChange={() => handleOptionSelect("bank")}
              />
              <div></div>
            </div>
          </Option>

          <Option onClick={() => handleOptionSelect("crypto")}>
            <div className="imgContainer">
              <Image src={Seller} alt="seller" />
            </div>
            <div className="textContainer">
              <span className="optionName">Register as Seller</span>
              <p>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun 1500.
              </p>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="crypto"
                checked={selectedOption === "crypto"}
                onChange={() => handleOptionSelect("crypto")}
              />
              <div></div>
            </div>
          </Option>
        </OptionsWrapper>

        <Button
          rounded
          s
          md
          btntype="green"
          width="170"
          onClick={handleRegisterModal}
        >
          Continue
        </Button>
      </Container>
    </>
  );
};

export default index;
