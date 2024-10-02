import styled from 'styled-components';

export const ProductDetailWrapper = styled.div`
  padding: 30px 0px;

  .download-button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
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
    gap: 26px;
    .titleHolder {
      max-width: 50%;
    }
    .headingHolder {
      max-width: 50%;
    }
  }
  .title {
    font-size: 40px;
    font-weight: 500;
    padding-bottom: 16px;
  }
  .titledesc {
    display: flex;
    gap: 26px;
    font-size: var(--h5-font-size);

    .kycText {
      display: block;
      flex-shrink: 0;
    }
  }
  .deadline {
    color: rgba(215, 65, 32, 1);
  }
  .headings {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    font-size: var(--h3-font-size);
    .textCon {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      .line {
        height: 100%;
        border-right: 2px solid #dadada;
      }
    }
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
    flex: 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
    .videoTag {
      overflow: hidden;
      border-radius: 30px;
      width: 100%;
    }
    .modalVideo {
      .videoTag {
        border-radius: 0;
      }
    }
    .videoWrapp {
      position: relative;
      .palyIcon {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 80px;
        height: 80px;
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        line-height: 1;
        cursor: pointer;
        z-index: 2;
      }
    }
    .btnWrapper {
      padding: 0px 26px 0px 21px;
      .button {
        flex-shrink: 0;
        margin: 0 10px;
        margin-bottom: 16px;
      }
      .viewDetail {
        margin-bottom: 10px;
      }
    }
  }

  .product2 {
    display: flex;
    flex: 1;
    gap: 20px;
    width: 100%;
    height: 360px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product3 {
    display: flex;
    flex: 1;
    gap: 20px;
    width: 100%;
    height: 360px;
    cursor: pointer;

    img {
      width: 100%;
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
      width: 100%;
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
        word-break: break-all;
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

      .titleHolder {
        max-width: 100%;
      }
      .headingHolder {
        max-width: 100%;
      }
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
      overflow: hidden;
    }
    .product2 {
      gap: 12px;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 0px 0px;
    .headings {
      font-size: 10px;
    }
  }
`;
