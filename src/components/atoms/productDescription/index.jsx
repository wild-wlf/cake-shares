import React from 'react';
import { ProductDescriptionWrapper } from './productDescription.style';
import Profilepic from '../../../_assets/userProfile.png';
import Image from 'next/image';
import { TbExternalLink } from 'react-icons/tb';
import { PiChatTeardropTextFill } from 'react-icons/pi';
import { useRouter } from 'next/router';

const ProductDescription = ({ data, SellerData }) => {
  const router = useRouter();

  return (
    <>
      <ProductDescriptionWrapper>
        <div className="investment">
          <div className="amountdiv">
            <div>
              <span>Min Investment (USD)</span>
              <strong className="amount">$ {data?.minimumInvestment?.toLocaleString('en-US')}</strong>
            </div>
            <div>
              <span>Asset Value (USD)</span>
              <strong className="amount">$ {data?.assetValue?.toLocaleString('en-US')}</strong>
            </div>
          </div>
          <div className="total">
            Total Value Raised (USD) <span> $ {data?.valueRaised || '0.00'}</span>
          </div>
        </div>
        <div className="seller">
          <div className="profilepic">
            <Image src={SellerData?.profilePicture} alt="profilepic" width={90} height={90} />
          </div>
          <div className="profiledesc">
            <strong className="user-name">{SellerData?.fullName}</strong>
            <span className="text">{SellerData?.sellerType}</span>
            <div className="btnwrapper">
              <div className="viewprofile" onClick={() => router.push(`/seller/${SellerData._id}`)}>
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
