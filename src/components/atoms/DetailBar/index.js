import React from 'react';
import { Container, Data } from './BarStyles';
import { convertToCurrencyFormat } from '@/helpers/common';

const DetailBar = ({ topData, amount, totalInvestmentCount }) => {
  topData?.sort((a, b) => b.investmentAmount - a.investmentAmount);

  const topInvestments = topData?.slice(0, 4) || [];
  const renderData = (item, index) => {
    if (item) {
      return (
        <Data key={item._id}>
          <span className="f-span">{item.investmentTypeName}</span>
          <h1>{`$${item.investmentAmount}`}</h1>
          <span className="l-span">{`${item.totalInvestment} Investments`}</span>
        </Data>
      );
    } else {
      return (
        <Data key={`placeholder-${index}`}>
          <span className="f-span">-------</span>
          <h1>$0</h1>
          <span className="l-span">0 Investments</span>
        </Data>
      );
    }
  };
  return (
    <Container>
      {[...Array(4)].map((_, index) => renderData(topInvestments[index], index))}

      <Data>
        <span className="f-span">Total Investment</span>
        {/* <h1>{`$${amount || 0}`}</h1> */}
        <h1>{convertToCurrencyFormat(amount)}</h1>
        <span className="l-span">{`${totalInvestmentCount || 0}  Investments`} </span>
      </Data>
    </Container>
  );
};

export default DetailBar;
