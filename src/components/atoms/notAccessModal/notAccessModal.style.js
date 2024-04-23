import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-top: 20px;
  h3 {
    font-size: var(--font-size-xxl);
    font-weight: 500;
    padding-bottom: 20px;
  }
  span {
    max-width: 445px;
    font-size: var(--font-size-sm);
    font-weight: 400;
    line-height: 22px;
  }
  .btnWrapper {
    display: flex;
    gap: 10px;
  }

  @media only screen and (max-width: 576px) {
    h3 {
      font-size: var(--font-size-xl);
      line-height: 25.2px;
    }
  }
`;
