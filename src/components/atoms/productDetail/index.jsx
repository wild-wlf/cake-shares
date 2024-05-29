import React, { useState } from "react";
import { ProductDetailWrapper } from "./productDetail.style";
import Button from "../Button";
import { IoIosArrowBack } from "react-icons/io";
import { RiFilePaperFill } from "react-icons/ri";
import Image from "next/image";
import property from "../../../_assets/property.png";
import property2 from "../../../_assets/property2.png";
import property3 from "../../../_assets/property3.png";
import CenterModal from "../Modal/CenterModal";
import ConfirmIcon from "../../../_assets/confirmIcon.svg";
import { useRouter } from "next/router";
import InitiateInvestmentModal from "../InitiateInvestmentModal";
import InvestmentSuccesModal from "../InvestmentSuccesModal";
import ProductDescription from "../productDescription";
import { daysLeft, formatDateWithSuffix } from "@/helpers/common";

const ProductDetail = ({ data }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [successmodal, setSuccessModal] = useState(false);
  return (
    <>
      <CenterModal
        open={modal}
        setOpen={setModal}
        title="Initiate Investment"
        width="543">
        <InitiateInvestmentModal
          handleCloseModal={() => {
            setModal(false);
            setSuccessModal(true);
          }}
        />
      </CenterModal>
      <CenterModal
        open={successmodal}
        setOpen={setSuccessModal}
        title={<Image src={ConfirmIcon} alt="success" />}
        width="543">
        <InvestmentSuccesModal />
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
          <Button
            rounded
            sm
            btntype="primary"
            className="button"
            onClick={() => setModal(true)}>
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
                    <span className="deadline">Deadline:</span> (
                    {formatDateWithSuffix(data?.deadline)} /{" "}
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
                <h3>{data?.investmentType}</h3>
              </div>
              <div>
                <span>Return (%)</span>
                <h3>30%</h3>
              </div>
              <div>
                <span>Funding Ratio</span>
                <h3>56%</h3>
              </div>
              <div>
                <span>Backers Limit</span>
                <h3>{data?.maximumBackers}</h3>
              </div>
              <div>
                <span>Annual Cost (est.)</span>
                <h3>$2,000</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="imagewrapper">
          <div className="product1">
            <Image
              src={data?.media[0]}
              alt="Product-Image"
              width={660}
              height={360}
            />
          </div>
          <div className="product2">
            {data?.media[1] && (
              <Image
                src={data?.media[1]}
                alt="Product-Image"
                width={365}
                height={360}
              />
            )}
            {data?.media[2] && (
              <Image
                src={data?.media[2]}
                alt="Product-Image"
                width={365}
                height={360}
              />
            )}
          </div>
        </div>

        <div className="investwrapper">
          <div className="content-holder">
            <strong>Why Invest in this?</strong>
            <p>{data?.investmentReason}</p>
            <strong>Description</strong>
            <p>{data?.description}</p>
          </div>
          <ProductDescription data={data} />
        </div>
      </ProductDetailWrapper>
    </>
  );
};

export default ProductDetail;
