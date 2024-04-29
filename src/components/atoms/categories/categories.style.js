import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--font-size-xl);
    font-weight: 500;
  }
  .slick-slide {
    padding: 20px;
  }
  .slick-track {
    padding-bottom: 34.72px;
  }
  .slider {
    padding-top: 21px;
    width: 100%;

    .slick-slide {
      width: 100%;
      height: 333px;

      @media only screen and (max-width: 768px) {
        height: 226px;
      }
    }
    .slick-arrow.slick-next {
      background-image: url(${(props) => props.image.src});
      background-color: #4e6199;
      background-size: 10px 17px;
      border-radius: 21px;
      background-repeat: no-repeat;
      background-position: 10px;
      width: 26px;
      height: 26px;
      border-radius: 100%;
      position: absolute;
      top: -35px;
      right: 0%;
      z-index: 1;
      @media only screen and (max-width: 576px) {
        /* background-size: 21px 21px; */
        border-radius: 21px;
        top: -34px;
        width: 21px;
        height: 21px;
      }
    }
    .slick-arrow.slick-prev {
      background-image: url(${(props) => props.image.src});
      background-color: #4e6199;
      background-size: 10px 17px;
      border-radius: 21px;
      background-repeat: no-repeat;
      background-position: 10px;
      width: 26px;
      height: 26px;
      border-radius: 100%;
      position: absolute;
      top: -49px;
      left: auto;
      right: 36px;
      z-index: 1;
      transform: rotate(178deg);
      @media only screen and (max-width: 576px) {
        top: -45px;
        right: 29px;
        /* background-size: 21px 21px; */
        border-radius: 21px;
        width: 21px;
        height: 21px;
      }
    }
    .slick-next:before,
    .slick-prev:before {
      opacity: 0;
    }
    .slick-next:after,
    .slick-prev:after {
      opacity: 0;
    }
    .slick-next:hover:before,
    .slick-prev:hover:before {
      opacity: 0;
    }
    .slick-next:hover:after,
    .slick-prev:hover:after {
      opacity: 0;
    }
    .slick-disabled {
      background-color: #cdcdcd !important;
    }
  }
  @media only screen and (max-width: 576px) {
    .title {
      font-size: var(--h5-font-size);
      font-weight: 500;
    }
  }
`;
