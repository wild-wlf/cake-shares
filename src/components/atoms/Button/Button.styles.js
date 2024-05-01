import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  padding: 15px 24px;
  font-family: var(--base-font-family);
  font-size: 22px;
  line-height: 26px;
  cursor: pointer;
  font-weight: ${({ weight }) => weight || "600"};
  width: ${({ width }) => width && "100%"};
  max-width: ${({ width }) => width && `${width}px`};
  transition: filter 0.3s linear, box-shadow 0.3s linear;

  border-radius: ${({ rounded }) => {
    if (rounded) {
      return "100px";
    }
    return "10px";
  }};
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
  color: ${({ btntype }) => {
    if (btntype === "primary") {
      return "var(--white)";
    }
    if (btntype === "light-green") {
      return "rgba(64,143,140,1)";
    }
    if (btntype === "blue") {
      return "rgba(78, 97, 153, 1)";
    }
    if (btntype === "white-blue") {
      return "#4E6199";
    }

    if (btntype === "white") {
      return "#313131";
    }
    if (btntype === "dropdown") {
      return "#313131";
    }
    return "rgba(49, 49, 49, 1)";
  }};

  background: ${({ btntype }) => {
    if (btntype === "dropdown") {
      return "var(--white)";
    }
    if (btntype === "primary") {
      return "rgba(64, 143, 140, 1)";
    }
    if (btntype === "light-green") {
      return "rgba(64,143,140,0.1)";
    }
    if (btntype === "blue") {
      return "rgba(78, 97, 153, 0.1)";
    }
    if (btntype === "white-blue") {
      return "#FEFEFE";
    }

    if (btntype === "white") {
      return "var(--white)";
    }
    // if (btntype === "danger") {
    //   return "var(--danger-dark)";
    // }
    return "var(--white)";
  }};
  border: ${({ btntype }) => {
    if (btntype === "white") {
      return "1px solid #cdcdcd";
    }
    if (btntype === "dropdown") {
      return "1px solid rgba(241, 241, 241, 1)";
    }
    if (btntype === "white-blue") {
      return "1px solid #4E6199";
    }
  }};

  transition: 0.3s all ease-in-out;
  ${({ md }) =>
    md &&
    css`
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      padding: 10px 12px;
    `};

  ${({ sm }) =>
    sm &&
    css`
      min-width: 97px;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      padding: 9px 12px;
    `};

  &:hover {
    /* background: ${({ btntype }) => {
      if (btntype === "white") {
        return "var(--white)";
      }
      return "var(--primary)";
    }};
    color: ${({ btntype }) => {
      if (btntype === "outline") {
        return "var(--primary)";
      }
      return "var(--white)";
    }}; */

    opacity: 0.75;
  }
  .loader {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid var(--primary);
    border-top: ${({ color }) =>
      color ? `3px solid ${color}` : `3px solid var(--primary)`};
    /* border-top: 3px solid var(--primary); */
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
