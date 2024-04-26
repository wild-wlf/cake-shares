import styled from "styled-components";

export const StyledUserDetail = styled.div`
  display: flex;
  gap: 20px;

  .colWrapper {
    width: 100%;
    padding: 20px;
    box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    .colHeader {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .colTitle {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
      }
    }
    .colBody {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 30px;
    }
    .col-content {
      display: flex;
      align-items: flex-start;
      flex-basis: 30%;
      gap: 15px;
      .iconWrap {
        background: rgba(64, 143, 140, 0.1);
        width: 30px;
        height: 30px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .textWrap {
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;
        .title {
          display: block;
          margin-bottom: 5px;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
        }
      }
    }
  }
`;
