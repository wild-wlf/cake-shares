import React, { useState } from "react";
import { ProductDescriptionWrapper, Wrapper } from "./productDescription.style";
import Profilepic from "../../../_assets/userProfile.png";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { useRouter } from "next/router";

const ProductDescription = ({ data, user }) => {
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
            <Image
              src={user?.profilePicture}
              alt="profilepic"
              width={90}
              height={90}
            />
          </div>
          <div className="profiledesc">
            <strong className="user-name">{user?.fullName}</strong>
            <span className="text">{user?.sellerType}</span>
            <div className="btnwrapper">
              <div
                className="viewprofile"
                onClick={() => router.push(`/seller/${user._id}`)}>
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
