import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  .banner2 {
    display: none;
  }
  @media only screen and (max-width: 650px) {
    padding: 0;
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
`;
