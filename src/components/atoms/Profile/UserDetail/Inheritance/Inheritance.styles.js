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
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
  .col {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 330px;

    .name,
    .text {
      display: block;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .text {
      font-weight: 300;
      border-right: 1px solid #989898;
      padding-right: 8px;
      margin-bottom: 0;
    }
    .user-col {
      display: flex;
      gap: 15px;

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
      padding-left: 8px;
      .edit-del-wrapper {
        display: flex;
        justify-content: flex-end;
        gap: 6px;
        margin-bottom: 5px;
        .edit,
        .delete {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
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
