import styled from "styled-components";
import arrowRight from "../../../_assets/banerSlideArrow.png";

export const BannerWrapper = styled.div`
  position: relative;
  padding-top: 14px;
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
      width: 30px;
      height: 30px;
      z-index: 5;
      top: auto;
      background: red;
      right: 20px;
      bottom: 25px;
      background: url(${arrowRight.src});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      &:before {
        display: none;
      }
      &::after {
        display: none;
      }
    }
    .slick-prev {
      left: auto;
      right: 55px;
      bottom: 40px;
      transform: rotate(180deg);
    }
    .slick-dots {
      bottom: 35px;
      right: auto;
      left: 50px;
      text-align: left;
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
  }
`;

export const SlideWrapp = styled.div`
  min-height: 364px;
  overflow: hidden;
  border-radius: 40px;
  background-image: url(${(props) => props.$bg.src});
  background-size: 100% 100%;
  /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
  display: flex !important;
  align-items: flex-end;
  color: white;
  .textWrapp {
    max-width: 503px;
    font-size: 40px;
    font-weight: 500;
    line-height: 50px;
    text-align: left;
    padding: 20px 20px 50px 50px;
    strong {
      display: block;
      margin-bottom: 20px;
    }
    .btn {
      width: 130px;
      padding: 12px;
      border-radius: 60px;
      background: rgba(255, 255, 255, 0.2);
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: var(--white);
    }
  }
  @media screen and (min-width: 1500px) {
    min-height: 500px;
    .textWrapp {
      padding: 20px 20px 150px 50px;
    }
  }
`;