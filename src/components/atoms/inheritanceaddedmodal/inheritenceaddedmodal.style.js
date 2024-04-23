import styled from "styled-components";

export const Wrapper = styled.div`
  h3 {
    font-size: var(--font-size-xxl);
    font-weight: 500;
    padding: 20px 0px;
  }

  @media only screen and (max-width: 576px) {
    h3 {
      font-size: var(--font-size-xl);
      line-height: 25.2px;
    }
  }
`;
