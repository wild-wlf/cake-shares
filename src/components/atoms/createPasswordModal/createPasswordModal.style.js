import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 26px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  .description {
    font-size: var(--font-size-xl);
    font-weight: 300;
    line-height: 25px;
    max-width: 560px;
  }
  .input-div {
    display: flex;
    gap: 26px;
  }
  .btnWrapper {
    display: flex;
    gap: 16px;
    .button {
      min-width: 145px;
      max-width: 190px;
    }
  }
  @media only screen and (max-width: 576px) {
    .description {
      font-size: 16px;
    }
    .input-div {
      flex-direction: column;
      gap: 0px;
      padding-bottom: 25px;
    }
    .button {
      font-size: 12px;
    }
  }
`;
