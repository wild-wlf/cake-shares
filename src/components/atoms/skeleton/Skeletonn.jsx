import React from "react";
import { StyledSkeleton } from "./Skeleton.styles";

const Skeletonn = ({ minWidth, width, height, minHeight, radius, margin ,circle , resp}) => {
  return (
    <StyledSkeleton
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      radius={radius}
      margin={margin}
      circle={circle}
      resp={resp}
    ></StyledSkeleton>
  );
};

export default Skeletonn;
