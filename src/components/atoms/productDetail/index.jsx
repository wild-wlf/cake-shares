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

const ProductDetail = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [successmodal, setSuccessModal] = useState(false);
  return (
    <>
      <CenterModal
        open={modal}
        setOpen={setModal}
        title="Initiate Investment"
        width="543"
      >
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
        width="543"
      >
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
            }}
          >
            <IoIosArrowBack />
            Go Back
          </Button>
          <Button
            rounded
            sm
            btntype="primary"
            className="button"
            onClick={() => setModal(true)}
          >
            Initiate Investment
            <RiFilePaperFill />
          </Button>
        </div>
        <div className="titlewrapper">
          <div>
            <div className="title">
              <span>Egypt Gov. Property</span>
            </div>
            <div className="titledesc">
              <span>Sector 9, Faiyum, Egypt</span>
              <span>
                <span className="deadline">Deadline:</span> (12th March, 2024 /
                05 days left)
              </span>
              <span>KYC (Level 3)</span>
            </div>
          </div>

          <div>
            <div className="headings">
              <div>
                <span>Investment type</span>
                <h3>Property</h3>
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
                <h3>20</h3>
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
            <Image src={property} alt="Product-Image" />
          </div>
          <div className="product2">
            <Image src={property2} alt="Product-Image" />
            <Image src={property3} alt="Product-Image" />
          </div>
        </div>

        <div className="investwrapper">
          <div className="content-holder">
            <strong>Why Invest in this?</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ultricies et mi quis scelerisque. Integer vitae posuere est, nec
              mollis diam. Donec feugiat eu mauris sed rutrum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
              gravida nulla. Donec feugiat eu mauris sed rutrum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
              gravida nulla.
            </p>
            <strong>Description</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ultricies et mi quis scelerisque. Integer vitae posuere est, nec
              mollis diam. Donec feugiat eu mauris sed rutrum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
              gravida nulla. Donec feugiat eu mauris sed rutrum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
              gravida nulla.
            </p>
          </div>
          <ProductDescription />
        </div>
      </ProductDetailWrapper>
    </>
  );
};

export default ProductDetail;
