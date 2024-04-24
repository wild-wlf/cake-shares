/* eslint-disable no-restricted-imports */
import styled from "styled-components";

export const StyledTopBar = styled.header`
  position: relative;
  padding: 30px 50px 0px 50px;
  font-family: var(--base-font-sans-serif);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  .closedNav {
    display: none;
  }
  .logoWrapper {
    display: flex;
    gap: 32px;
  }
  .logo {
    max-width: 206px;
    img {
      max-width: 208px;
      height: auto;
    }
  }
  .textField {
    display: flex;
    width: 100%;
    height: 26px;
    padding: 0 10px 0 0;
    align-items: center;
    position: relative;
    gap: 8px;
    background: var(--white);
    color: var(--green);
  }
  .textField::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 1px;
    background-color: var(--green);
  }
  .notification {
    display: flex;
    padding: 8px 10px;
    align-items: center;
    gap: 4px;
    border-radius: 50px;
    border: 1px solid #cdcdcd;
    color: var(--dark);
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    cursor: pointer;
    .bell-white {
      display: none;
    }
  }
  .notificationWrapper-visible {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
    max-width: 432px;
    position: absolute;
    top: 30px;
    right: 0px;
    transform: translateY(50px);
    transition: 0.4s;
  }
  .notificationWrapper {
    max-width: 432px;
    position: absolute;
    top: 20px;
    right: 0px;
    padding-top: 64px;
    visibility: hidden;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.4s;
  }

  .sideNav {
    position: absolute;
    left: -500px;
    transition: all 1s ease-in-out;
    height: 100%;
  }

  .sideNav.show {
    left: 0;
    transition: linear 1s;
  }

  .buttonWrapper {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
    /* background: var(--black); */

    .closedNav {
      display: block;
      cursor: pointer;
      font-size: 24px;
    }
    .logo {
      display: none;
    }
    .textField {
      display: none;
    }
    /* .button {
      background-color: var(--white);
    }
    .notification {
      .bell-white {
        display: block;
      }
    }
    .bell {
      display: none;
    } */
  }
  @media (max-width: 576px) {
    padding: 30px 20px 20px 20px;
  }
`;