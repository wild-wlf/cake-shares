import styled from "styled-components";

export const BannerWrapper = styled.div`
  padding: 146px 50px 0px 50px;
  width: 100%;
  background-image: url(${(props) => props.image.src});

  .description {
    width: 33%;
  }
`;
