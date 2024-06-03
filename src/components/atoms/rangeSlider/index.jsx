import React, { useState } from 'react'
import Slider , { Range }from "rc-slider";
import "rc-slider/assets/index.css";
const RangeSlider = ({...props}) => {
   const [rangeValue, setRangeValue] = useState([]);
  const handleRangeChange = (val) => {
    setRangeValue(val);
    props.onChange(val)
  }
  return (
       <Slider.Range
              min={250}
              max={1000}
              value={rangeValue}
              onChange={handleRangeChange}
              className="rc-slide-customization"
          
         />
  )
}

export default RangeSlider