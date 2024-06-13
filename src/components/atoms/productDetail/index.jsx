import React, { useState } from 'react';
import { ProductDetailWrapper } from './productDetail.style';
import Button from '../Button';
import { IoIosArrowBack } from 'react-icons/io';
import { RiFilePaperFill } from 'react-icons/ri';
import Image from 'next/image';
import property from '../../../_assets/property.png';
import property2 from '../../../_assets/property2.png';
import property3 from '../../../_assets/property3.png';
import CenterModal from '../Modal/CenterModal';
import ConfirmIcon from '../../../_assets/confirmIcon.svg';
import { useRouter } from 'next/router';
import InitiateInvestmentModal from '../InitiateInvestmentModal';
import InvestmentSuccesModal from '../InvestmentSuccesModal';
import ProductDescription from '../productDescription';
import { daysLeft, formatDateWithSuffix } from '@/helpers/common';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/components/Context/authContext';
import HandleLoginModal from '@/components/molecules/HandleLoginModal';
import UpgradeKycLevelModal from '@/components/molecules/upgradeKycLevelModal';
import InfoIcon from '../../../_assets/info-icon.svg';
import Skeletonn from '../skeleton/Skeletonn';

const ProductDetail = ({ data, SellerData, setProductData, loading }) => {
  const { isLoggedIn, user } = useContextHook(AuthContext, v => ({
    isLoggedIn: v.isLoggedIn,
    user: v.user,
  }));
  const [reqKycLevel, setReqKycLevel] = useState();
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [infoModalHeadingText, setInfoModalHeadingText] = useState();
  const [infoModalText, setInfoModalText] = useState();
  const [handleLoginModal, setHandleLoginModal] = useState(false);
  const [upgradeKycLevel, setUpgradeKycLevel] = useState(false);
  const [successmodal, setSuccessModal] = useState(false);
  const [ownershipPercentage, setOwnershipPercentage] = useState();

  const handleInitiateInvestment = () => {
    if (!isLoggedIn) {
      setInfoModalHeadingText('Please Login to Perform this Operation!');
      setInfoModalText('You are not currently logged in. Please log in to proceed with this action.');
      setHandleLoginModal(true);
    } else if (user?.wallet < data?.minimumInvestment) {
      setInfoModalHeadingText('Insufficient Wallet Balance!');
      setInfoModalText(
        `You currently do not have sufficient wallet balance to perform this action. The minimum amount required to invest in this product is $${
          data?.minimumInvestment ?? 0
        }, while your current account balance is $${user?.wallet || 0}. Please top up your account.`,
      );
      setHandleLoginModal(true);
    } else if (user?.isKycRequested) {
      setInfoModalHeadingText('KYC Requested!');
      setInfoModalText(
        'Your KYC request is currently under review and has not yet been approved. We appreciate your patience and will notify you as soon as the process is complete. Thank you for your understanding.',
      );
      setHandleLoginModal(true);
    } else if (user.kycLevel >= data.kycLevel) {
      setModal(true);
    } else {
      setReqKycLevel(data?.kycLevel);
      setUpgradeKycLevel(true);
    }
  };

  return (
    <>
      <CenterModal
        open={upgradeKycLevel}
        setOpen={setUpgradeKycLevel}
        // iscloseAble={false}
        title={
          <>
            <Image src={InfoIcon} alt="InfoIcon" />
          </>
        }
        width="689">
        <UpgradeKycLevelModal reqKycLevel={reqKycLevel} setOpen={setUpgradeKycLevel} />
      </CenterModal>
      <CenterModal
        open={handleLoginModal}
        setOpen={setHandleLoginModal}
        iscloseAble={false}
        title={infoModalHeadingText}
        width="689">
        <HandleLoginModal setOpen={setHandleLoginModal} text={infoModalText} />
      </CenterModal>
      <CenterModal open={modal} setOpen={setModal} title="Initiate Investment" width="543">
        <InitiateInvestmentModal
          productId={data?._id}
          assetValue={data?.assetValue}
          minInvestValue={data?.minimumInvestment}
          setOwnershipPercentage={setOwnershipPercentage}
          handleCloseModal={() => {
            setModal(false);
            setSuccessModal(true);
          }}
          setProductData={setProductData}
        />
      </CenterModal>
      <CenterModal
        open={successmodal}
        setOpen={setSuccessModal}
        title={<Image src={ConfirmIcon} alt="success" />}
        width="543">
        <InvestmentSuccesModal ownershipPercentage={ownershipPercentage} />
      </CenterModal>

      <ProductDetailWrapper>
        <div className="btnwrapper">
          <Button
            rounded
            sm
            btntype="blue"
            className="button"
            onClick={() => {
              router.back();
            }}>
            <IoIosArrowBack />
            Go Back
          </Button>
          <Button rounded sm btntype="primary" className="button" onClick={handleInitiateInvestment}>
            Initiate Investment
            <RiFilePaperFill />
          </Button>
        </div>
        <div className="titlewrapper">
          <div>
            <div className="title">
              <span>{data?.productName}</span>
            </div>
            <div className="titledesc">
              <span>{data?.address}</span>
              <span>
                {data?.deadline && (
                  <>
                    <span className="deadline">Deadline:</span> ({formatDateWithSuffix(data?.deadline)} /{' '}
                    {daysLeft(data?.deadline)} left)
                  </>
                )}
              </span>
              <span>KYC ({data?.kycLevel})</span>
            </div>
          </div>

          <div>
            <div className="headings">
              <div>
                <span>Investment type</span>
                <h3>{data?.investmentType?.name}</h3>
              </div>
              <div>
                <span>Return (%)</span>
                <h3>0%</h3>
              </div>
              <div>
                <span>Funding Ratio</span>
                <h3>0%</h3>
              </div>
              <div>
                <span>Backers Limit</span>
                <h3>{data?.maximumBackers}</h3>
              </div>
              <div>
                <span>Annual Cost (est.)</span>
                <h3>$0.00</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="imagewrapper">
          <div className="product1">
            {loading ? (
              <Skeletonn height="360" radius="30px" width="100" />
            ) : (
              data?.media[0] && <Image src={data?.media[0]} alt="Product-Image" width={660} height={360} />
            )}
          </div>
          <div className="product2">
            {loading ? (
              <Skeletonn height="360" radius="30px" width="100" />
            ) : (
              data?.media[1] && <Image src={data?.media[1]} alt="Product-Image" width={365} height={360} />
            )}
          </div>
          <div className="product2">
            {loading ? (
              <Skeletonn height="360" radius="30px" width="100" />
            ) : (
              data?.media[2] && <Image src={data?.media[2]} alt="Product-Image" width={365} height={360} />
            )}
          </div>
        </div>

        <div className="investwrapper">
          <div className="content-holder">
            <strong>Why Invest in this?</strong>
            {loading ? (
              <>
                <Skeletonn height="20" radius="12px" width="100" margin="10px" />
                <Skeletonn height="20" radius="12px" width="80" margin="10px" />
                <Skeletonn height="20" radius="12px" width="80" margin="10px" />
                <Skeletonn height="20" radius="12px" width="60" margin="10px" />
              </>
            ) : (
              <p>{data?.investmentReason}</p>
            )}
            <strong>Description</strong>

            {loading ? (
              <>
                <Skeletonn height="20" radius="12px" width="100" margin="10px" />
                <Skeletonn height="20" radius="12px" width="80" margin="10px" />
                <Skeletonn height="20" radius="12px" width="80" margin="10px" />
                <Skeletonn height="20" radius="12px" width="60" margin="10px" />
              </>
            ) : (
              <p>{data?.description}</p>
            )}
          </div>
          <ProductDescription data={data} SellerData={SellerData} />
        </div>
      </ProductDetailWrapper>
    </>
  );
};

export default ProductDetail;
