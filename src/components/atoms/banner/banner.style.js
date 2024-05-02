import styled from "styled-components";

export const BannerWrapper = styled.div`
  /* width: 100%; */
  padding-top: 14px;
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
`;

export const SlideWrapp = styled.div`
  width: 100%;
  min-height: 364px;
  background-image: url(${(props) => props.$bg.src});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;