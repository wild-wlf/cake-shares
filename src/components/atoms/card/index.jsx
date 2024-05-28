import React from "react";
import { CardWrapper } from "./card.style";
import Image from "next/image";
import Heart from "../../../_assets/heart.svg";
import ProgressBar from "@ramonak/react-progress-bar";

const Card = ({ Cardimage, c_data }) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="image-div">
          <Image src={Cardimage} alt="card-image" width={300} height={300} />
          <div className="tagWrapper">
            <div className="tag">{c_data?.investmentType}</div>
            <div className="icon-div">
              <Image src={Heart} alt="Heart" className="heart" />
            </div>
          </div>
        </div>
        <div className="decription">
          <div className="title-div">
            <span>{c_data?.productName}</span>
            <span>
              {c_data?.currentBackers == 0
                ? "0%"
                : (c_data?.currentBackers / c_data?.maximumBackers) * 100}
            </span>
          </div>

          <div className="progress">
            <ProgressBar
              completed={
                c_data?.currentBackers === 0
                  ? 0
                  : (c_data?.currentBackers / c_data?.maximumBackers) * 100
              }
              bgColor="#408F8C"
              height="5px"
              borderRadius="60px"
              isLabelVisible={false}
              labelColor="#D9D9D9"
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
