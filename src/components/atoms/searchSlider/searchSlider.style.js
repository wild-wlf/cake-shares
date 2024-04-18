import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 50px;

  .slider {
    .slick-slide {
      height: 333px;
      @media only screen and (max-width: 768px) {
        height: 226px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0px 30px;
  }
  @media only screen and (max-width: 576px) {
    padding: 0px 20px;
  }
`;
