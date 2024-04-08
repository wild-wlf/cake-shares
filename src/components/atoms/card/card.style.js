import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 221px;
  height: 272px;
  border-radius: 24px;
  background-color: rgba(241, 241, 241, 1);
  box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1),
    4px 31px 31px 0 rgba(0, 0, 0, 0.09), 10px 70px 42px 0 rgba(0, 0, 0, 0.05),
    17px 124px 50px 0 rgba(0, 0, 0, 0.01), 27px 194px 55px 0 rgba(0, 0, 0, 0);
  .image-div {
    padding: 10px 10px 0px;
    height: 204px;
    border-radius: 20px 20px 0px 0px;
    position: relative;
  }
  .tagWrapper {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 95px;
  }
  .tag {
    font-size: 10px;
    width: 75px;
    height: 25px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(78, 97, 153, 1);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .decription {
    width: 201px;
    height: 49px;
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
    margin: 10px;
    gap: 10px;
    font-weight: 400;
    font-size: 10px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
  .title-div {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px) {
    width: 153px;
    height: 188px;
    border-radius: 16px;
    .image-div {
      padding: 7px 7px 0px;
      height: 141px;
      border-radius: 14px 14px 0px 0px;
      position: relative;
    }
    .tag {
      width: 52.42px;
      height: 17.32px;
      font-size: 7px;
    }
    .tagWrapper {
      top: 12px;
      gap: 57px;
      display: flex;
      align-items: center;
    }
    .heart {
      width: 11.16px;
      height: 9.79px;
    }
    .icon-div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .decription {
      width: 139px;
      height: 33.96px;
      border-radius: 0px 0px 14px 14px;
      padding: 6.93px;
      margin: 6.79px;
      font-weight: 400;
      font-size: 6.93px;
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      gap: 7.63px;
    }
  }
`;