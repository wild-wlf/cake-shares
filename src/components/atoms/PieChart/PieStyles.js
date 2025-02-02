import styled from 'styled-components';

export const StyledGraph = styled.div`
  width: 100%;
  min-height: 295px;
  background: var(--white);
  border-radius: 25px;
  border: 1px solid rgba(74, 85, 104, 0.1);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1), -10px 10px 20px rgba(0, 0, 0, 0.1);
  padding: ${({ sm }) => (sm ? '20px' : '40px 31px')};
  @media (min-width: 1235px) {
    height: 100%;
  }
  .no-data {
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    @media (min-width: 1235px) {
      height: 250px;
    }
  }
`;

export const GraphHeader = styled.div`
  display: flex;
  align-items: start;
  position: relative;
  .head {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    strong {
      font-size: ${({ sm }) => (sm ? '18px' : '22px')};
      padding-bottom: ${({ sm }) => (sm ? '30px' : '0')};
      font-weight: 500;
    }
  }

  @media (max-width: 1200px) {
    .head {
      strong {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  .highcharts-container {
    height: ${({ sm }) => (sm ? '250px !important' : '300px !important')};
    width: 100% !important;
  }
  svg {
    width: 100%;
  }

  @media (max-width: 1200px) {
    .highcharts-container {
      height: 200px !important;
    }
  }
`;
