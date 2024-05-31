import React from 'react';
import { styled } from '@mui/material/styles';
import Slider, { SliderThumb } from '@mui/material/Slider';
import PropTypes from 'prop-types';
import { useState } from 'react';

const RangeSlider = ({ searchQuery, setSearchQuery }) => {
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#408F8C',
    height: '10px',
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 26,
      width: 26,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
    },
    '& .MuiSlider-track': {
      height: '10px',
    },
    '& .MuiSlider-rail': {
      color: '#F1F1F1',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: '10px',
    },
  }));

  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }

  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };
  return (
    <AirbnbSlider
      onChange={e => {
        setSearchQuery(prev => ({
          ...prev,
          minInvestment: e.target.value[0],
          maxInvestment: e.target.value[1],
        }));
      }}
      defaultValue={[searchQuery.minInvestment, searchQuery.maxInvestment]}
      slots={{ thumb: AirbnbThumbComponent }}
      getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
      min={0}
      max={100}
    />
  );
};

export default RangeSlider;
