import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 50px 0px 50px;
  .CardWrapper {
    width: 100%;
    border-radius: 20px;
    padding-left: 11px;
    background-color: #fefefe;
    box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1),
      4px 31px 31px 0 rgba(0, 0, 0, 0.09);
    min-height: 180px;
    display: flex;
    align-items: center;
    margin-bottom: 26px;
  }
  .card-div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .card {
    width: 210px;
    height: 158px;
    border-radius: 16px;
    box-shadow: 0px 4px 14px 0px #0000001a;
  }
  .image-div {
    width: 100%;
    height: 108px;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    img {
      object-fit: cover;
      height: 100%;
      border-radius: 20px 20px 0px 0px;
    }
  }
  .tagWrapper {
    position: absolute;
    top: 16px;
    left: 12px;
    display: flex;
    align-items: end;
    gap: 70px;
  }
  .tag {
    font-size: 11px;
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
    padding: 10px 10px;
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
  .desc-div {
    max-width: 255px;
    h3 {
      max-width: 220px;
      font-size: 26px;
      line-height: 32.76px;
      font-weight: 500;
    }
    span {
      font-size: var(--font-size-sm);
      .deadline {
        color: rgba(215, 65, 32, 1);
      }
    }
  }
  .values-div {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 650px;
    min-height: 126px;
    padding: 0px 20px;
    flex-wrap: wrap;
    border-right: 0.5px solid #cdcdcd;
    border-left: 0.5px solid #cdcdcd;
    h3 {
      font-size: var(--font-size-xl);
      font-weight: 600;
      padding-top: 10px;
    }
  }
  .btnWrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0px 26px 0px 21px;
    .button {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1200px) {
    .values-div {
      max-width: 450px;
    }
  }
  @media only screen and (max-width: 992px) {
    .CardWrapper {
      flex-wrap: wrap;
      gap: 42px;
      padding-bottom: 10px;
    }
    .values-div {
      border: 0px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0px 30px 0px 30px;
    .btnWrapper {
      flex-direction: row;
      .button {
        width: auto;
      }
    }
    .CardWrapper {
      padding-top: 11px;
    }
    .values-div {
      max-width: 400px;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 0px 20px 0px 20px;
    .values-div {
      padding: 0px;
      span {
        font-size: 14px;
      }
      h3 {
        font-size: 18px;
      }
    }
    .btnWrapper {
      padding: 0px;
    }

    .desc-div {
      h3 {
        font-size: 20px;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .card {
    width: 180px;
    height: 150px;
  }
  .decription {
    width: 180px;
  }

  @media only screen and (max-width: 420px) {
    .card {
      width: 140px;
      height: 150px;
    }
    .decription {
      width: 140px;
    }
    .tagWrapper {
      left: 8px;
      gap: 34px;
    }
  }
`;
