import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 50px 30px 50px;

  span {
    font-size: var(--h2-font-size);
    font-weight: 500;
  }
  .amenities {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
    row-gap: 16px;
    padding-top: 16px;
  }
  .amenity {
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

  @media only screen and (max-width: 992px) {
    .amenities {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 15px 30px 30px 30px;
  }
  @media only screen and (max-width: 576px) {
    padding: 0px 20px 26px 20px;
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
