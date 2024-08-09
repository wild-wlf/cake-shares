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
      min={0}
      max={1000}
      value={rangeValue}
      onChange={handleRangeChange}
      className="rc-slide-customization"
    />
  );
};

export default RangeSlider;
