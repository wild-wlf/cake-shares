import React from "react";
import { Wrapper } from "./amenities.style";
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
    <Wrapper>
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
    </Wrapper>
  );
};

export default index;
