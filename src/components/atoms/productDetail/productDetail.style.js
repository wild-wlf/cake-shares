import styled from 'styled-components';

export const ProductDetailWrapper = styled.div`
  padding: 30px 0px;

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
      box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1), 4px 31px 31px 0 rgba(0, 0, 0, 0.09);
    }
  }
  .product1 {
    width: 100%;
    max-width: 660px;
    height: 364px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product2 {
    display: flex;
    gap: 20px;
    width: 100%;
    height: 360px;

    img {
      width: 50%;
      height: 100%;
      object-fit: cover;
    }
  }

  .investwrapper {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    flex-direction: column-reverse;
    @media (min-width: 992px) {
      flex-direction: row;
    }
    @media (min-width: 1400px) {
      gap: 75px;
    }

    .content-holder {
      font-size: 16px;
      line-height: 20px;
      @media (min-width: 992px) {
        max-width: 60%;
      }
      @media (min-width: 1200px) {
        font-size: 18px;
        line-height: 22px;
        max-width: 65%;
      }
      @media (min-width: 1400px) {
        max-width: 70%;
      }
      strong {
        display: block;
        font-size: 24px;
        line-height: 28px;
        font-weight: 500;
        padding-bottom: 10px;
      }
      p {
        margin-bottom: 20px;
        @media (min-width: 768px) {
          margin-bottom: 30px;
        }
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
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
  }
  @media only screen and (max-width: 992px) {
    .product1,
    .product2 {
      height: 300px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 0px;
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
    .product2 {
      gap: 12px;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 00px 0px;
    .headings {
      font-size: 10px;
    }
  }
`;
