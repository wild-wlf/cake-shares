import styled from "styled-components";

export const InvestmentSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 20px;
  .title {
    font-size: 24px;
    font-weight: 500;
  }
  .desc {
    max-width: 455px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    span {
      font-weight: 600;
      color: rgba(78, 97, 153, 1);
    }
  }
  @media only screen and (max-width: 576px) {
    .title {
      font-size: 20px;
    }
    .desc {
      font-size: 14px;
    }
  }
`;
