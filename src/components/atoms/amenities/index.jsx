import React from "react";
import { AmentitiesWrapper } from "./amenities.style";
import { IoIosCheckmarkCircle } from "react-icons/io";

const index = () => {
  const arr = [
    "Grade A Property",
    "Grade A Property",
    "Grade A Property",
    "Premium Collection",
    "Premium Collection",
    "Premium Collection",
  ];
  return (
    <AmentitiesWrapper>
      <div>
        <span>Amenities</span>
      </div>
      <div className="amenities">
        {arr.map((data, index) => (
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
