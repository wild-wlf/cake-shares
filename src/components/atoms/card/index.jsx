import React from 'react';
import { CardWrapper } from './card.style';
import Image from 'next/image';
import people from '../../../_assets/people.png';
import ProgressBar from '@ramonak/react-progress-bar';

const calculatePercentage = (valueRaised, assetValue) => {
  if (assetValue === 0 || !valueRaised) return '0.00';
  return ((valueRaised / assetValue) * 100).toFixed(2);
};

const Card = ({ Cardimage, c_data }) => {
  const percentage = calculatePercentage(c_data?.valueRaised, c_data?.assetValue);

  return (
    <CardWrapper>
      <div className="card">
        <div className="image-div">
          <Image src={Cardimage} alt="card-image" width={300} height={300} />
          <div className="tagWrapper">
            <div className="tag">{c_data?.investmentType?.name}</div>
          </div>
        </div>
        <div className="decription">
          <div className="title-div">
            <div className="productNameWrapper">
              <span className="producName">{c_data?.productName}</span>
            </div>
            <div className="details">
              <Image src={people} alt="people" />
              <span className="currentBackers">{c_data?.currentBackers}</span>
              {c_data?.currentBackers === 0 ? '0%' : `${percentage}%`} - {c_data?.assetValue}
            </div>
          </div>

          <div className="progress">
            <ProgressBar
              completed={c_data?.currentBackers === 0 ? 0 : Math.ceil(percentage)}
              bgColor="#408F8C"
              height="5px"
              borderRadius="60px"
              isLabelVisible={false}
              labelColor="#D9D9D9"
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
