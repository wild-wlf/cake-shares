import styled from "styled-components";

export const BannerWrapper = styled.div`
  padding: 0px 50px;
  width: 100%;
  .banner2 {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .banner {
      display: none;
    }
    .banner2 {
      display: block;
      width: 100%;
    }
  }
`;
