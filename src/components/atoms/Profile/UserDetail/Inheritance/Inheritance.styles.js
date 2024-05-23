import styled from "styled-components";

export const StyledInheritance = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.09);

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    .heading {
      display: block;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }

    .add-new {
      display: flex;
      align-items: center;
      color: #408f8c;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      border-bottom: 1px solid #408f8c;
      cursor: pointer;
    }
  }

  .col-holder {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .col {
    width: 100%;
    max-width: 100%;
    @media screen and (min-width: 576px) {
      max-width: 330px;
    }
    @media screen and (min-width: 1439px) {
      display: flex;
      align-items: center;
    }

    .name,
    .text {
      color: var(--dark);
      display: block;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
    .text {
      font-weight: 300;
      margin-bottom: 0;
      display: flex;
      flex-grow: 1;
      width: 140px;
      @media screen and (min-width: 1439px) {
        border-right: 1px solid #989898;
        padding-right: 8px;
        display: block;
      }
    }
    .country {
      text-transform: capitalize;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
    }
    .user-col {
      display: flex;
      gap: 15px;
      margin-bottom: 10px;

      @media screen and (min-width: 1439px) {
        margin-bottom: 0;
      }
      .img-holder {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ecf4f3;
        color: #408f8c;
        border-radius: 50px;
      }
    }
    .user-edit-del {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      @media screen and (min-width: 1439px) {
        padding-left: 8px;
        display: block;
      }
      .edit-del-wrapper {
        display: flex;
        justify-content: flex-end;
        gap: 6px;
        margin-bottom: 5px;
        .edit,
        .delete {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 20px;
          background: #ecf4f3;
          color: #408f8c;
          cursor: pointer;
        }
        .delete {
          background: #d74120;
          color: var(--white);
        }
      }
      .text {
        padding: 0;
        border: none;
      }
    }
  }
`;
