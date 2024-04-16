import React from "react";
import { Wrapper } from "./productDetail.style";
import Button from "../Button";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { RiFilePaperFill } from "react-icons/ri";
import Image from "next/image";
import property from "../../../_assets/property.png";
import property2 from "../../../_assets/property2.png";
import property3 from "../../../_assets/property3.png";

const index = () => {
  return (
    <Wrapper>
      <div className="btnwrapper">
        <Link href="/">
          <Button rounded sm btntype="blue" className="button">
            <IoIosArrowBack />
            Go Back
          </Button>
        </Link>
        <Button rounded sm btntype="green" className="button">
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
              <span className="deadline">Deadline:</span> (12th March, 2024 / 05
              days left)
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
        <div className="whyinvest">
          <h4>Why Invest in this?</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            ultricies et mi quis scelerisque. Integer vitae posuere est, nec
            mollis diam. Donec feugiat eu mauris sed rutrum. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
            gravida nulla. Donec feugiat eu mauris sed rutrum. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
            gravida nulla.
          </span>
        </div>
        <div className="investment">
          <div className="amountdiv">
            <div>
              <span>Min Investment (USD)</span>
              <h3>$ 5000</h3>
            </div>
            <div>
              <span>Asset Value (USD)</span>
              <h3>$ 2,000,000</h3>
            </div>
          </div>
          <div className="total">
            Total Value Raised (USD) <span> $ 50,000</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
