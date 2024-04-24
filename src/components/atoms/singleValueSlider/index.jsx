import React from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const SingleValueSlider = () => {
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "rgba(215, 65, 32, 1)",
    height: "8px",
    width: "70%",
    padding: "0px !important",
    "& .MuiSlider-thumb": {
      display: "none",
    },
    "& .MuiSlider-track": {
      height: "8px",
    },
    "& .MuiSlider-rail": {
      color: "rgba(255, 255, 255, 1)",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: "8px",
    },
  }));

  return (
    <AirbnbSlider
      value={1}
      min={0}
      max={3}
      step={1}
      getAriaLabel={(index) =>
        index === 0 ? "Minimum price" : "Maximum price"
      }
    />
  );
};

export default SingleValueSlider;
