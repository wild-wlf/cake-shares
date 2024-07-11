import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgba(241, 241, 241, 1);
  box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1), 4px 31px 31px 0 rgba(0, 0, 0, 0.09);
  position: relative;
  padding: 10px;
  .image-div {
    height: 204px;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .tagWrapper {
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 95px;
  }
  .tag {
    font-size: 11px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(78, 97, 153, 1);
    border-radius: 60px;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 5px 8px;
  }
  .decription {
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
    gap: 10px;
    font-weight: 400;
    font-size: 10px;
    background-color: var(--white);
    padding-top: 10px;
  }
  .title-div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .productNameWrapper {
      display: flex;
      align-items: center;
      gap: 2px;
      .producName {
        max-width: 60px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .currentBackers {
        color: var(--primary);
        font-weight: 500;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 6px;
    border-radius: 16px;
    .image-div {
      height: 141px;
      border-radius: 14px 14px 0px 0px;
      position: relative;
    }
    .tag {
      width: 52.42px;
      height: 17.32px;
      font-size: 8px;
    }
    .tagWrapper {
      top: 12px;
      gap: 57px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      border-radius: 0px 0px 14px 14px;
      font-weight: 400;
      background-color: var(--white);
      .title-div {
        margin-bottom: 6px;
      }
    }
  }
`;
