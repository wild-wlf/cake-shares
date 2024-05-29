import React, { useState } from "react";
import { ProductDescriptionWrapper, Wrapper } from "./productDescription.style";
import Profilepic from "../../../_assets/userProfile.png";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { useRouter } from "next/router";

const ProductDescription = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <ProductDescriptionWrapper>
        <div className="investment">
          <div className="amountdiv">
            <div>
              <span>Min Investment (USD)</span>
              <strong className="amount">$ {data?.minimumInvestment}</strong>
            </div>
            <div>
              <span>Asset Value (USD)</span>
              <strong className="amount">$ {data?.assetValue}</strong>
            </div>
          </div>
          <div className="total">
            Total Value Raised (USD) <span> $ 50,000</span>
          </div>
        </div>
        <div className="seller">
          <div className="profilepic">
            <Image src={Profilepic} alt="profilepic" />
          </div>
          <div className="profiledesc">
            <strong className="user-name">Logan Paulson</strong>
            <span className="text">Private Seller</span>
            <div className="btnwrapper">
              <div
                className="viewprofile"
                onClick={() => router.push("/seller-profile")}>
                <span>View Profile</span> <TbExternalLink className="icon" />
              </div>
              <div className="message" onClick={() => setModal(true)}>
                <span>Message Seller</span>
                <PiChatTeardropTextFill className="icon" />
              </div>
            </div>
          </div>
        </div>
      </ProductDescriptionWrapper>
    </>
  );
};

export default ProductDescription;
