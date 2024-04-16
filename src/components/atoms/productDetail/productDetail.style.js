import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 50px 0px 50px;

  .btnwrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .titlewrapper {
    padding-top: 26px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .title {
    font-size: 40px;
    font-weight: 500;
    padding-bottom: 16px;
  }
  .titledesc {
    display: flex;
    gap: 16px;
    font-size: var(--h5-font-size);
  }
  .deadline {
    color: rgba(215, 65, 32, 1);
  }
  .headings {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    font-size: var(--h3-font-size);
  }
  h3 {
    font-size: var(--font-size-xxl);
    font-weight: 600;
  }
  .imagewrapper {
    display: flex;
    gap: 20px;
    padding-top: 30px;
    img {
      object-fit: cover;
      height: 100%;
      border-radius: 30px;
      box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1),
        4px 31px 31px 0 rgba(0, 0, 0, 0.09);
    }
  }
  .product1 {
    width: 50%;
    height: 364px;
  }
  .product2 {
    display: flex;
    gap: 20px;
    width: 50%;
    height: 364px;
    img {
      width: 48%;
    }
  }

  .investwrapper {
    padding-top: 36px;
    display: flex;
    align-items: flex-end;
    gap: 75px;
  }
  .whyinvest {
    width: 74%;
    h4 {
      font-size: var(--h2-font-size);
      font-weight: 500;
    }
    span {
      font-size: var(--h4-font-size);
    }
  }
  .investment {
    display: block;
    width: 25%;
    span {
      font-size: var(--font-size-sm);
    }
    h3 {
      font-size: 1.375rem;
      font-weight: 600;
    }
  }
  .total {
    width: 100%;
    background-color: rgba(78, 97, 153, 0.1);
    border-radius: 40px;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-sm);
    span {
      font-size: var(--font-size-xl);
      font-weight: 600;
      padding-left: 6px;
    }
  }
  .amountdiv {
    display: flex;
    gap: 32px;
  }

  @media only screen and (max-width: 1200px) {
    .titlewrapper {
      flex-direction: column;
      gap: 26px;
      align-items: normal;
    }
    .headings {
      display: flex;
      justify-content: space-between;
    }
    .whyinvest {
      width: 69%;
    }
    .investment {
      width: 30%;
    }
  }
  @media only screen and (max-width: 992px) {
    .product1,
    .product2 {
      height: 300px;
    }
    .whyinvest {
      width: 64%;
    }
    .investment {
      width: 35%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 30px 0px 30px;
    .title {
      font-size: var(--font-size-xl);
      font-weight: 500;
    }
    .titledesc {
      font-size: var(--font-size-xs);
    }
    .headings {
      font-size: var(--font-size-xs);
    }
    h3 {
      font-size: var(--font-size-sm);
      font-weight: 600;
    }
    .imagewrapper {
      flex-direction: column;
    }
    .product1,
    .product2 {
      width: 100%;
      height: 185px;
    }
    .investwrapper {
      flex-direction: column;
      align-items: flex-start;
      gap: 50px;
    }
    .whyinvest {
      width: 100%;
    }
    .investment {
      width: 60%;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 00px 20px 0px 20px;
    .headings {
      font-size: 10px;
    }
    .investwrapper{
      gap: 32px;
    }
    .whyinvest {
      h4 {
        font-size: var(--font-size-xl);
      }
      span {
        font-size: var(--font-size-sm);
      }
    }
    .investment {
      width: 80%;
      span {
        font-size: var(--font-size-sm);
      }
      h3 {
        font-size: var(--font-size-lg);
      }
    }
    .amountdiv {
      gap: 20px;
    }
  }
`;
