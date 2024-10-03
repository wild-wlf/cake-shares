import styled from 'styled-components';
import arrowRight from '../../../_assets/banerSlideArrow.png';

export const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  .banner2 {
    display: none;
  }
  @media only screen and (max-width: 650px) {
    padding: 0;
    margin: 0 -15px;
    .banner {
      display: none;
    }
    .banner2 {
      display: block;
      width: 100%;
    }
  }
  *:focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 0px;
  }
  img {
    width: 100%;
  }

  .slick-slider {
    .slick-prev,
    .slick-next {
      width: 25px;
      height: 25px;
      z-index: 5;
      bottom: 35px;
      top: auto;
      background: red;
      right: 25px;
      background: url(${arrowRight.src});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      top: auto;
      @media screen and (min-width: 576px) {
        bottom: 4px;
      }
      @media screen and (min-width: 1200px) {
        bottom: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
      }
      &:before {
        display: none;
      }
      &::after {
        display: none;
      }
    }
    .slick-prev {
      right: 55px;
      top: auto;
      left: auto;
      bottom: 47px;
      transform: rotate(180deg);
      @media screen and (min-width: 576px) {
        bottom: 17px;
      }
      @media screen and (min-width: 1200px) {
        bottom: 34px;
      }
    }
    .slick-dots {
      display: none;
      @media screen and (min-width: 992px) {
        display: block;
        top: auto;
        bottom: 15px;
        left: 20px;
        right: auto;
        text-align: left;
      }
      @media screen and (min-width: 1200px) {
        bottom: 35px;
        left: 50px;
      }
      li {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: red;
        margin: 0 3px;
        background: #333;
      }
      .slick-active {
        width: 35px;
        background: white;
      }
      button {
        &:before {
          display: none;
        }
        &::after {
          display: none;
        }
      }
    }
    .slick-slide {
      overflow: hidden;
      @media screen and (min-width: 768px) {
        padding-top: 30px;
      }
      @media screen and (min-width: 992px) {
        padding-top: 40px;
      }
    }
  }
`;

export const SlideWrapp = styled.div`
  background-image: url(${props => props.$resp.src});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  color: white;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: flex !important;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${props => props.$bg.src});
  }

  .textWrapp {
    max-width: 100%;
    font-weight: 500;
    text-align: left;
    padding: 30px;
    text-align: center;
    @media screen and (min-width: 768px) {
      max-width: 320px;
      text-align: left;
      padding: 20px;
    }
    @media screen and (min-width: 992px) {
      padding: 20px 20px 50px 20px;
      max-width: 410px;
    }
    @media screen and (min-width: 1200px) {
      max-width: 500px;
      padding: 20px 20px 70px 50px;
    }

    .heading {
      display: block;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 12px;
      @media screen and (min-width: 768px) {
        font-size: 25px;
        line-height: 29px;
      }
      @media screen and (min-width: 992px) {
        font-size: 30px;
        line-height: 35px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 35px;
        line-height: 40px;
      }
      @media screen and (min-width: 1350px) {
        font-size: 40px;
        line-height: 45px;
      }
    }
    .text {
      display: block;
      font-weight: 300;
      max-height: 62px;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 10px;
      @media screen and (min-width: 1200px) {
        margin-bottom: 20px;
      }
    }
    .btn {
      width: 175px;
      padding: 10px;
      border-radius: 60px;
      background: rgba(255, 255, 255, 0.2);
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
      color: var(--white);
      @media screen and (min-width: 1200px) {
        padding: 12px;
      }
    }
  }

  .img-holder {
    width: 100%;
    max-width: 380px;
    min-height: 200px;
    display: flex;
    align-items: flex-end;
    margin: 0 auto;

    @media screen and (min-width: 992px) {
      margin: 0;
      height: auto;
    }
    @media screen and (min-width: 992px) {
      max-width: 460px;
    }
    @media screen and (min-width: 1200px) {
      max-width: 540px;
    }
    @media screen and (min-width: 1350px) {
      max-width: 580px;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 310px;
  }
  @media screen and (min-width: 1350px) {
    height: 320px;
  }
  /* @media screen and (min-width: 1350px) {
    height: 350px;
  } */
`;
