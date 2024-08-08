import styled from 'styled-components';

export const HandleLoginModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding-top: 26px;
  .InfoIcon {
    width: 140px;
    height: 140px;
  }
  span {
    max-width: 500px;
    width: 100%;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
  }
  @media only screen and (max-width: 576px) {
    gap: 20px;
    padding-top: 20px;
    .InfoIcon {
      width: 100px;
      height: 100px;
    }
    span {
      font-size: 16px;
      font-weight: 300;
    }
  }
  .btn-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    button {
      width: 250px;
    }
  }
`;
