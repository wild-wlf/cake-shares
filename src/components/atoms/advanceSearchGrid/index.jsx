import React from "react";
import { SearchGridWrapper } from "./advanceSearchGrid.style";
import ProgressBar from "@ramonak/react-progress-bar";
import Property from "../../../_assets/property.png";
import Property2 from "../../../_assets/property2.png";
import Heart from "../../../_assets/heart.svg";
import Property3 from "../../../_assets/property3.png";
import Image from "next/image";
import { RiFilePaperFill } from "react-icons/ri";
import Button from "../Button";
import Link from "next/link";

const AdvanceSearchGrid = () => {
  const imagesArray = [
    {
      image: Property,
      id: "1",
    },
    {
      image: Property3,
      id: "2",
    },
    {
      image: Property,
      id: "3",
    },
    {
      image: Property,
      id: "4",
    },
    {
      image: Property2,
      id: "5",
    },
    {
      image: Property3,
      id: "6",
    },
  ];
  return (
    <SearchGridWrapper>
      {imagesArray.map((data, index) => (
        <div className="CardWrapper" key={index}>
          <div className="card-div">
            <div className="card">
              <div className="image-div">
                <Image src={data.image} alt="card-image" />
                <div className="tagWrapper">
                  <div className="tag">Properties</div>
                  <div className="icon-div">
                    <Image src={Heart} alt="Heart" className="heart" />
                  </div>
                </div>
              </div>
              <div className="decription">
                <div className="title-div">
                  <span>Egypt Gov. Property</span>
                  <span>30%</span>
                </div>
                <div className="progress">
                  <ProgressBar
                    completed={30}
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
              <h3>Egypt Gov. Property</h3>
              <span>Washington DC, United States</span>
              <br />
              <span>
                <span className="deadline">Deadline:</span> (12th March, 2024 /
                5 Days Left)
              </span>
              <br />
              <span>KYC (Level 3)</span>
            </div>
          </div>
          <div className="values-div">
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
          <div className="btnWrapper">
            <Button rounded sm btntype="primary" className="button">
              <RiFilePaperFill />
              Initiate Investment
            </Button>
            <Link href={`/products/${data.id}`}>
              <Button rounded sm btntype="white-blue" className="button">
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
