import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const RangeSlider = ({ ...props }) => {
  const [rangeValue, setRangeValue] = useState([props.min, props.max]);
  const handleRangeChange = val => {
    setRangeValue(val);
    props.onChange(val);
  };
  return (
    <Slider.Range
      style={{ zIndex: 0 }}
      min={props?.min}
      max={props?.max}
      value={rangeValue}
      onChange={handleRangeChange}
      className="rc-slide-customization"
    />
  );
};

export default RangeSlider;
