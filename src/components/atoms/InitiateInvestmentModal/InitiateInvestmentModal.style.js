import styled from "styled-components";

export const InvestmentModalWrapper = styled.div`
  padding: 26px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  .description {
    font-size: var(--font-size-xl);
    font-weight: 300;
    line-height: 25px;
  }
  .current-wallet {
    padding-bottom: 26px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 20px;
    span {
      color: rgba(78, 97, 153, 1);
      font-weight: 600;
    }
  }
  .text-wrapper {
    padding-bottom: 26px;
    font-size: 14px;
    span {
      color: rgba(78, 97, 153, 1);
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 576px) {
    .description {
      font-size: 16px;
    }
  }
`;
