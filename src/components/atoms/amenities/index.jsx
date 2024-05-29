import React from "react";
import { AmentitiesWrapper } from "./amenities.style";
import { IoIosCheckmarkCircle } from "react-icons/io";

const index = ({ data }) => {
  return (
    <AmentitiesWrapper>
      <div>
        <span>Amenities</span>
      </div>
      <div className="amenities">
        {data?.amenities?.map((data, index) => (
          <div className="amenity" key={index}>
            <span>
              <IoIosCheckmarkCircle className="icon" />
              {data}
            </span>
          </div>
        ))}
      </div>
    </AmentitiesWrapper>
  );
};

export default index;
