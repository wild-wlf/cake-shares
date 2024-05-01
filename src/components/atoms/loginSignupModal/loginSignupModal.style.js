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
  }
  .input-div {
    display: flex;
    gap: 26px;
  }

  .socialbtns {
    display: flex;
    justify-content: center;
    div {
      display: flex;
      justify-content: center;
      gap: 20px;
      max-width: 400px;
    }
    .button {
      font-size: var(--font-size-xs);
      min-width: 195px;
    }
  }
  .continue-btn {
    padding-top: 26px;
  }
  .other-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
    width: 100%;
    padding-bottom: 20px;
    span {
      font-size: 12px;
      font-weight: 400;
    }
    .hr {
      width: 100%;
      max-width: 230px;
      text-align: center;
      display: block;
      justify-content: center;
      hr {
        border: 1px solid #f1f1f1;
      }
    }
  }
  .register {
    width: 100%;
    text-align: center;
    padding-top: 26px;
    span {
      color: #4e6199;
      font-weight: 500;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 576px) {
    .description {
      font-size: 16px;
    }
    .input-div {
      flex-direction: column;
      gap: 0px;
    }
    .other-section {
      padding: 16px 0px;
    }
    .socialbtns {
      div {
        width: 100%;
        flex-direction: column;
      }
    }
  }
`;
