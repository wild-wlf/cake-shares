import React, { useState, useEffect } from "react";
import { SearchGridWrapper } from "./advanceSearchGrid.style";
import ProgressBar from "@ramonak/react-progress-bar";
import Heart from "../../../_assets/heart.svg";
import Image from "next/image";
import { RiFilePaperFill } from "react-icons/ri";
import Button from "../Button";
import Link from "next/link";
import { daysLeft, formatDateWithSuffix } from "@/helpers/common";
import people from '../../../_assets/people.png';
import CenterModal from "../Modal/CenterModal";
import InitiateInvestmentModal from "../InitiateInvestmentModal";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";
import UpgradeKycLevelModal from "@/components/molecules/upgradeKycLevelModal";
import HandleLoginModal from "@/components/molecules/HandleLoginModal";
import InvestmentSuccesModal from "../InvestmentSuccesModal";
import InfoIcon from '../../../_assets/info-icon.svg';
import ConfirmIcon from '../../../_assets/confirmIcon.svg';

const AdvanceSearchGrid = ({ data }) => {
  const { isLoggedIn, user } = useContextHook(AuthContext, v => ({
    isLoggedIn: v.isLoggedIn,
    user: v.user,
  }));

  const [productsData, setProductsData] = useState([])
  const [currentProduct, setCurrentProduct] = useState({})
  const [reqKycLevel, setReqKycLevel] = useState();
  const [modal, setModal] = useState(false)
  const [infoModalHeadingText, setInfoModalHeadingText] = useState();
  const [infoModalText, setInfoModalText] = useState();
  const [modalIntent, setModalIntent] = useState();
  const [handleLoginModal, setHandleLoginModal] = useState(false);
  const [upgradeKycLevel, setUpgradeKycLevel] = useState(false);
  const [successmodal, setSuccessModal] = useState(false);
  const [ownershipPercentage, setOwnershipPercentage] = useState();

  const handleInitiateInvestment = (data) => {
    if (!isLoggedIn) {
      setInfoModalHeadingText('Please Login to Perform this Operation!');
      setInfoModalText('You are not currently logged in. Please log in to proceed with this action.');
      setHandleLoginModal(true);
      setModalIntent('Login Required!');
    } else if (user?.wallet < data?.minimumInvestment) {
      setInfoModalHeadingText('Insufficient Wallet Balance!');
      setInfoModalText(
        `You currently do not have sufficient wallet balance to perform this action. The minimum amount required to invest in this product is $${data?.minimumInvestment ?? 0
        }, while your current account balance is $${user?.wallet || 0}. Please top up your account.`,
      );
      setModalIntent('Insufficient Wallet Balance!');
      setHandleLoginModal(true);
    } else if (user?.isKycRequested && user?.kycLevel < data?.kycLevel) {
      setInfoModalHeadingText('KYC Requested!');
      setInfoModalText(
        'Your KYC request is currently under review and has not yet been approved. We appreciate your patience and will notify you as soon as the process is complete. Thank you for your understanding.',
      );
      setHandleLoginModal(true);
      setModalIntent('KYC Under Review!');
    } else if (user.kycLevel >= data.kycLevel) {
      setModal(true);
    } else {
      setReqKycLevel(data?.kycLevel);
      setUpgradeKycLevel(true);
    }
  };

  useEffect(() => {
    setProductsData(data)
  }, [])


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
      <CenterModal open={handleLoginModal} setOpen={setHandleLoginModal} title={infoModalHeadingText} width="689">
        <HandleLoginModal setOpen={setHandleLoginModal} text={infoModalText} modalIntent={modalIntent} />
      </CenterModal>
      <CenterModal open={modal} setOpen={setModal} title="Initiate Investment" width="543">
        <InitiateInvestmentModal
          productId={currentProduct?._id}
          sellerId={Object.keys(currentProduct)?.length > 0 ? currentProduct?.userInfo[0]?._id : ''}
          assetValue={currentProduct?.assetValue}
          minInvestValue={currentProduct?.minimumInvestment}
          valueRaised={currentProduct?.valueRaised}
          setOwnershipPercentage={setOwnershipPercentage}
          handleCloseModal={() => {
            setModal(false);
            setSuccessModal(true);
          }}
          // setProductData={setProductData}
          origin='advanceSearch'
          setCompleteData={(raisedValue) => {
            const indexToChange = productsData?.findIndex((ele) => ele?._id === currentProduct?._id);
            console.log(indexToChange);
            console.log(productsData[indexToChange]);

            setProductsData(prev => {
              const updatedProducts = [...prev];

              if (indexToChange !== -1) {
                updatedProducts[indexToChange] = {
                  ...updatedProducts[indexToChange],
                  valueRaised: raisedValue
                };
              }

              return updatedProducts;
            });

          }}

        />
      </CenterModal>
      <CenterModal
        open={successmodal}
        setOpen={setSuccessModal}
        title={<Image src={ConfirmIcon} alt="success" />}
        width="543">
        <InvestmentSuccesModal ownershipPercentage={ownershipPercentage} />
      </CenterModal>
      <SearchGridWrapper>
        {productsData.map((data, index) => (
          <div className="CardWrapper" key={index}>
            <div className="card-div">
              <div className="card">
                <div className="image-div">
                  <figure>
                    <Image src={data.media[0]} alt="card-image" width={180} height={180} />
                  </figure>
                  <div className="tagWrapper">
                    <div className="tag">{data?.investmentType?.name || data?.investmentType}</div>
                  </div>
                </div>
                <div className="decription">
                  <div className="title-div">
                    <div className="productNameWrapper">
                      <span className="producName">{data?.productName}</span>
                    </div>
                    <div className="details">
                      <Image src={people} alt="people" />
                      <span className="currentBackers">{data?.currentBackers}</span>
                      {data?.currentBackers === 0 ? '0%' : `${((data?.valueRaised / data?.assetValue) * 100).toFixed(2)}%`} - {data?.assetValue}
                    </div>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      completed={data?.currentBackers === 0 ? 0 : ((data?.valueRaised / data?.assetValue) * 100).toFixed(2)}
                      bgColor="#408F8C"
                      height="5px"
                      borderRadius="60px"
                      isLabelVisible={false}
                      labelColor="#D9D9D9"
                    />
                  </div>
                </div>
              </div>
              <div className="desc-div">
                <h3>{data?.productName}</h3>
                <span className="address">{data?.address}</span>
                <span>
                  <span className="deadline">Deadline: </span> ({formatDateWithSuffix(data?.deadline)} /{' '}
                  {daysLeft(data?.deadline)} Left)
                </span>
                <span>KYC (Level {data?.kycLevel})</span>
              </div>
            </div>
            <div className="values-div">
              <div>
                <span>Investment type</span>
                <h3>{data?.investmentType?.name || data?.investmentType}</h3>
              </div>
              <div>
                <span>Return (%)</span>
                <h3>{data?.returnRatio || 0}%</h3>
              </div>
              <div>
                <span>Funding Ratio</span>
                <h3>{data && ((data?.valueRaised / data?.assetValue) * 100).toFixed(2)}%</h3>
              </div>
              <div>
                <span>Backers Limit</span>
                <h3>{data?.maximumBackers || 'Infinite'}</h3>
              </div>
              <div>
                <span>Annual Cost (est.)</span>
                <h3>${data?.annualCost || 0}</h3>
              </div>
            </div>
            <div className="btnWrapper">
              <Button rounded sm btntype="primary" onClick={() => {
                setCurrentProduct(data)
                handleInitiateInvestment(data);
              }} className="button" width="100%">
                <RiFilePaperFill />
                Initiate Investment
              </Button>
              <Link href={`/products/${data._id}`}>
                <Button rounded sm btntype="white-blue" className="button viewDetail" width="100%">
                  <RiFilePaperFill />
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </SearchGridWrapper>
    </>
  );
};

export default AdvanceSearchGrid;
