import React from "react";
import { Wrapper } from "./advanceSearchGrid.style";
import ProgressBar from "@ramonak/react-progress-bar";
import Property from "../../../_assets/property.png";
import Property2 from "../../../_assets/property2.png";
import Property3 from "../../../_assets/property3.png";

const AdvanceSearchGrid = () => {
  const images = [
    {
      image: Property,
      id: "1",
    },
    {
      id: "2",
      image: Property2,
    },
    {
      image: Property3,
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
    <Wrapper>
      {images.map((data, index) => (
        <div className="CardWrapper" key={index}>
          <div className="card-div">
            <div className="card">
              <div className="image-div">
                <Image src={Cardimage} alt="card-image" />
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
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default AdvanceSearchGrid;
