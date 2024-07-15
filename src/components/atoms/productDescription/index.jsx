import React, { useState } from 'react';
import { ProductDescriptionWrapper } from './productDescription.style';
import Image from 'next/image';
import { TbExternalLink } from 'react-icons/tb';
import { PiChatTeardropTextFill } from 'react-icons/pi';
import { useRouter } from 'next/router';
import CenterModal from '../Modal/CenterModal';
import Chat from '../Chat';
import Profilepic from '@/_assets/profileplaceHolder.jpg';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Toast from '@/components/molecules/Toast';
import { convertToCurrencyFormat } from '@/helpers/common';

const ProductDescription = ({ data, SellerData }) => {
  const router = useRouter();
  const [chat, setChat] = useState(false);
  const { isLoggedIn } = useContextHook(AuthContext, v => ({
    isLoggedIn: v.isLoggedIn,
  }));

  return (
    <>
      <CenterModal
        zIndex={9999}
        open={chat}
        setOpen={setChat}
        width="1339"
        title={`${SellerData?.fullName || SellerData?.username}'s Chat`}>
        <Chat userInfo={SellerData} type="private" />
      </CenterModal>
      <ProductDescriptionWrapper>
        <div className="investment">
          <div className="amountdiv">
            <div>
              <span>Min Investment (USD)</span>
              <strong className="amount">{convertToCurrencyFormat(data?.minimumInvestment)}</strong>
            </div>
            <div>
              <span>Asset Value (USD)</span>
              <strong className="amount">{convertToCurrencyFormat(data?.assetValue)}</strong>
            </div>
          </div>
          <div className="total">
            Total Value Raised (USD){' '}
            <span>
              $
              {data?.valueRaised?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) ||
                '0.00'}
            </span>
          </div>
        </div>
        <div className="seller">
          <div className="profilepic">
            <Image src={SellerData?.profilePicture || Profilepic} alt="profilepic" width={90} height={90} />
          </div>
          <div className="profiledesc">
            <strong className="user-name">{SellerData?.fullName}</strong>
            <span className="text">{SellerData?.sellerType} Seller</span>
            <div className="btnwrapper">
              <div className="viewprofile" onClick={() => router.push(`/seller/${SellerData?._id}`)}>
                <span>View Profile</span> <TbExternalLink className="icon" />
              </div>
              <div
                className="message"
                onClick={() => {
                  if (isLoggedIn) {
                    setChat(true);
                  } else {
                    Toast({ type: 'error', message: 'Kindly Login To Continue' });
                  }
                }}>
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
