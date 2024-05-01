import styled from "styled-components";

export const StyledSellerPersonalInfo = styled.div`
  border-radius: 20px;
  background: var(--White);
  box-shadow: 0px 207px 58px 0px rgba(0, 0, 0, 0),
    0px 132px 53px 0px rgba(0, 0, 0, 0.01),
    0px 74px 45px 0px rgba(0, 0, 0, 0.03), 0px 33px 33px 0px rgba(0, 0, 0, 0.04),
    0px 8px 18px 0px rgba(0, 0, 0, 0.05);
  padding: 26px 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin-bottom: 50px;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
  .section {
    width: 100%;
    @media (min-width: 1200px) {
      width: 60%;
      border-right: 1px solid var(--gray-2);
    }
    @media (min-width: 1400px) {
      width: 50%;
    }
    &:nth-last-child(1) {
      border: none;

      @media (min-width: 1200px) {
        width: 40%;
      }
      @media (min-width: 1400px) {
        width: 50%;
      }
    }
  }
  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .col-holder {
    @media (min-width: 768px) {
      display: flex;
    }
    .col {
      width: 100%;
      display: flex;
      gap: 10px;
      padding: 20px 0;
      border-bottom: 1px solid var(--gray-2);
      @media (min-width: 768px) {
        border-right: 1px solid var(--gray-2);
        border-bottom: 0;
        padding: 10px 20px;
        margin-bottom: 0;
      }
      @media (min-width: 1400px) {
        padding: 10px 30px;
      }
      @media (min-width: 1600px) {
        padding: 10px 40px;
      }
      &:nth-last-child(1) {
        border: none;
        padding-bottom: 0;
      }
      &:nth-child(1) {
        padding-left: 0;
        @media (max-width: 767px) {
          padding-top: 0;
        }
      }

      .title {
        display: block;
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        margin-bottom: 2px;
        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 24px;
        }
      }

      .img-holder {
        width: 35px;
        height: 35px;
        background: #ecf4f3;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: 50px;
      }
      span {
        display: block;
        @media (max-width: 767px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
`;
