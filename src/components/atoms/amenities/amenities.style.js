import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  gap: 50px;
  justify-content: space-between;

  .chatWrapper {
    width: 100%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    gap: 11px;
    div {
      width: 54px;
      height: 54px;
      border-radius: 46.96px;
      background: #4e6199;
      box-shadow: 0px 4px 14px 0px #00000026;
      display: flex;
      justify-content: center;
    }
    h6 {
      font-size: 16px;
      font-weight: 500;
      line-height: 20.16px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 576px) {
    flex-direction: column-reverse;
    padding-top: 20px;
    .chatWrapper {
      margin-left: auto;
    }
  }
`;
export const AmentitiesWrapper = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
    gap: 50px;
  }

  span {
    font-size: var(--h2-font-size);
    font-weight: 500;
  }
  .amenities-holder {
    margin: 0 0 20px;
    @media (min-width: 992px) {
      width: 50%;
    }
  }
  .amenities,
  .additional-document {
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
    row-gap: 16px;
    padding-top: 16px;
  }
  .amenity,
  .additional-document {
    gap: 5px;
    padding: 12px 16px 12px 16px;
    background-color: white;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 60px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: var(--h5-font-size);
      font-weight: 300;
    }
    .icon {
      color: rgba(64, 143, 140, 1);
      margin-right: 8px;
      font-size: 20px;
    }
  }

  .additional-document {
    /* max-width: max-content; */
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 992px) {
    .amenities {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 26px 0px 30px 0px;
  }
  @media only screen and (max-width: 576px) {
    padding: 26px 0px 26px 0px;
    width: 100%;
    .amenities {
      width: 100%;
      gap: 16px;
      span {
        font-size: 13px;
      }
    }
    .amenity {
      padding: 10px 14px 10px 14px;
    }
  }
`;
