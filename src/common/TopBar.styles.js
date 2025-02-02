import styled from 'styled-components';

export const StyledTopBar = styled.header`
  position: relative;
  padding-top: 30px;
  font-family: var(--base-font-sans-serif);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  .actions {
    display: flex;
    gap: 10px;
    .userName {
      max-width: 60px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .profile {
      width: 20px;
      height: 20px;
      background: var(--dark);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .closedNav {
    display: none;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .message {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      top: -2px;
      width: 10px;
      height: 10px;
      background: red;
      border-radius: 10px;
      right: 0;
    }
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

    z-index: 1;
    .bell-white {
      display: none;
    }
  }

  .logo {
    width: 100%;
    max-width: 206px;
    img {
      display: block;
      max-width: 100%;
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

    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 0;
      transition: all 0.6s ease-in-out;
      left: 0;
      bottom: 0;
      background: var(--green);
    }

    &.textField-home {
      color: var(--green);
      &::before {
        width: 70px;
      }
    }
  }
  .textField::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 1px;
  }
  .textFieldRight,
  .kycField {
    display: flex;
    width: 100%;
    height: 26px;
    padding: 0 10px 10px 0;
    align-items: center;
    position: relative;
    gap: 8px;
    background: var(--white);
    font-weight: 500;
    .heading {
      padding-right: 69px;
    }
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
    z-index: 1;
    .bell-white {
      display: none;
    }
  }
  .notificationWrapper-visible {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
    max-width: 432px;
    width: 100%;
    position: absolute;
    top: 30px;
    right: 0px;
    transform: translateY(50px);
    transition: 0.4s;
    max-height: 400px;
    z-index: 1;
    overflow-y: auto;
  }
  .notificationWrapper {
    max-width: 432px;
    width: 100%;
    position: absolute;
    top: 20px;
    right: 0px;
    padding-top: 64px;
    visibility: hidden;
    transform: translateY(50px);
    opacity: 0;
    transition: 0.4s;
    max-height: 400px;
    z-index: 1;
    overflow-y: auto;
  }
  .wallet {
    display: flex;
    padding: 8px 15px;
    align-items: center;
    gap: 8px;
    border-radius: 50px;
    border: 1px solid #313131;
    color: var(--dark);
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background: rgba(64, 143, 140, 0.7);
      border: 1px solid var(--green);
      color: var(--white);
    }
  }
  .wallet2 {
    cursor: pointer;
    display: none;
    gap: 8px;
  }
  .LogOut {
    display: none;
    align-items: flex-end;
    gap: 8px;
    color: #d74120;
  }
  .kycFieldWrapper {
    display: none;
  }
  @media (max-width: 992px) {
    .wallet {
      padding: 6px 10px !important;
      font-size: 12px;
    }
    .textFieldRight {
      padding: 0 10px 5px 0;
      .heading {
        padding-right: 30px;
      }
    }
  }
  .authContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 850px) {
    .textFieldRight {
      padding: 0 10px 5px 0;
      .heading {
        font-size: 13px;
        padding-right: 10px;
      }
    }
  }

  @media (max-width: 576px) {
    margin: 0 -15px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;

    .closedNav {
      display: block;
      cursor: pointer;
    }
    .wallet {
      display: none;
    }
    .buttonWrapper {
      display: none;
    }
    .wallet2 {
      display: flex;
    }
    .LogOut {
      cursor: pointer;
      display: flex;
    }
    .textFieldRight {
      display: none;
    }
    .kycFieldWrapper {
      display: block;
      max-width: 190px;
      width: 100%;
    }
  }
  .active-nav & {
    @media (max-width: 768px) {
      .layer {
        position: fixed;
        inset: 0;
        backdrop-filter: blur(4px);
        z-index: 9;
      }
    }
  }
`;
export const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
  .profile {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 260px;
    padding: 40px 0px 0px 20px;
    border-radius: 0px 40px 40px 0px;
    background: rgba(255, 255, 255, 1);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    transition: all 0.4s ease-in-out;
    transform: ${({ $active }) => ($active ? 'translateX(0%)' : 'translateX(-100%)')};
    .profile {
      padding-top: 30px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .profile-details {
      display: flex;
      gap: 9px;
    }
    .user-details {
      display: flex;
      flex-direction: column;
    }
    .sub {
      font-size: 10px;
    }
  }
`;
