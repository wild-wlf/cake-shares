import React from "react";
import { SearchGridWrapper } from "./advanceSearchGrid.style";
import ProgressBar from "@ramonak/react-progress-bar";
import Heart from "../../../_assets/heart.svg";
import Image from "next/image";
import { RiFilePaperFill } from "react-icons/ri";
import Button from "../Button";
import Link from "next/link";
import { daysLeft, formatDateWithSuffix } from "@/helpers/common";

const AdvanceSearchGrid = ({data}) => {
  
  return (
    <SearchGridWrapper>
      {data.map((data, index) => (
        <div className="CardWrapper" key={index}>
          <div className="card-div">
            <div className="card">
              <div className="image-div">
                <figure>
                  <Image src={data.media[0]} alt="card-image" width={180} height={180} />
                </figure>
                <div className="tagWrapper">
                  <div className="tag">{data?.investmentType?.name}</div>
                </div>
              </div>
              <div className="decription">
                <div className="title-div">
                  <span>{data?.productName}</span>
                  <span>30%</span>
                </div>
                <div className="progress">
                  <ProgressBar
                    completed={data?.currentBackers === 0 ? 0 : (data?.currentBackers / data?.maximumBackers) * 100}
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
              <h3>$0</h3>
            </div>
          </div>
          <div className="btnWrapper">
            <Button rounded sm btntype="primary" className="button" width="100%">
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
  );
};

export default AdvanceSearchGrid;
