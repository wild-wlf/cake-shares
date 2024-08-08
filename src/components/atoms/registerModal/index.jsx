import React, { useState } from 'react';
import { Container, OptionsWrapper, Option } from './registerModal.style';
import Image from 'next/image';
import Buyer from '../../../_assets/buyer.svg';
import Seller from '../../../_assets/seller.svg';
import Button from '../Button';

const RegisterModal = ({
  handleRegisterModal,
  handleSellerModal,
  type,
  description,
  setLoginModal,
  setRegisterModal,
}) => {
  // const [register, setRegister] = useState("register");

  // const handleRadioChecked = (e) => {
  //   const { name } = e.target;

  //   setRegister(name);
  // };
  const [selectedOption, setSelectedOption] = useState('bank');

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleModal = () => {
    if (selectedOption === 'bank') {
      handleRegisterModal();
    } else {
      handleSellerModal();
    }
  };
  return (
    <>
      <Container>
        <span className="heading">{description}</span>

        <OptionsWrapper>
          <Option onClick={() => handleOptionSelect('bank')}>
            <div className="imgContainer">
              <Image src={Buyer} alt="buyer" />
            </div>
            <div className="textContainer">
              <span className="optionName">{type} as Buyer</span>
              <p>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500.
              </p>
            </div>

            <div className="custom-radio">
              <input
                type="radio"
                id="bank"
                checked={selectedOption === 'bank'}
                onChange={() => handleOptionSelect('bank')}
              />
              <div></div>
            </div>
          </Option>

          <Option onClick={() => handleOptionSelect('crypto')}>
            <div className="imgContainer">
              <Image src={Seller} alt="seller" />
            </div>
            <div className="textContainer">
              <span className="optionName">{type} as Seller</span>
              <p>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.
                Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500.
              </p>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="crypto"
                checked={selectedOption === 'crypto'}
                onChange={() => handleOptionSelect('crypto')}
              />
              <div></div>
            </div>
          </Option>
        </OptionsWrapper>

        <div className="cta-buttons">
          <Button rounded s md btntype="primary" width="170" onClick={handleModal}>
            Continue
          </Button>
          {type === 'Login' && (
            <Button
              rounded
              s
              md
              btntype="primary"
              width="170"
              onClick={() => {
                setRegisterModal(true);
                setLoginModal(false);
              }}>
              Register
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default RegisterModal;
