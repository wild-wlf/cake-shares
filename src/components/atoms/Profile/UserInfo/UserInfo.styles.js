import styled from "styled-components";

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  .userInfo {
    width: 100%;
    position: relative;
    margin-top: -100px;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    .textWrapper {
      padding: 0 20px;
      .discreption {
        span {
          padding: 0 10px 0 0;
        }
      }
    }
    .name {
      display: block;
      margin-bottom: 20px;
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
    }
  }
  .active {
    color: var(--secondary-50);
  }
  .addbefore {
    position: relative;
    padding-left: 15px !important;
    &:before {
      position: absolute;
      content: "";
      width: 2px;
      left: 0;
      background: rgba(0, 0, 0, 0.1);
      top: 2px;
      bottom: 2px;
    }
  }
  .categoriesWrapper {
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    color: var(--secondary-50);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 220px;
    width: 100%;
    .categoriesList {
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 8px;
    }
  }
  .categoriesText {
    display: block;
    margin-bottom: 10px;
  }
  .kycWrapper {
    max-width: 356px;
    width: 100%;
    padding: 13px 15px;
    background: rgba(64, 143, 140, 0.1);
    border-radius: 10px;
    .updgradeKyc {
      display: flex;
      align-items: flex-end;
      gap: 10px;
    }
    .headingWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .discreption {
      font-size: 10px;
      font-weight: 500;
      line-height: 14px;
      text-decoration: underline;
      color: var(--secondary-50);
      cursor: pointer;
      white-space: nowrap;
    }
    .headingText {
      font-size: 14px;
      font-weight: 500;
      line-height: 17.64px;
    }
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--dark);
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;