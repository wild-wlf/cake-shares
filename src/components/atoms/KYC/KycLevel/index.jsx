import React from "react";
import { StyledKycLevel } from "./KycLevel.styles";

const KycLevel = ({ level = 1 }) => {
  return <StyledKycLevel $level={level} />;
};

export default KycLevel;
