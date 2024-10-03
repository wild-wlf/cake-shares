import styled from 'styled-components';

export const SearchGridWrapper = styled.div`
  .CardWrapper {
    width: 100%;
    border-radius: 20px;
    padding: 20px 12px;
    background-color: #fefefe;
    box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1), 4px 31px 31px 0 rgba(0, 0, 0, 0.09);
    margin-bottom: 26px;
    @media screen and (min-width: 1100px) {
      display: flex;
      align-items: center;
    }
  }
  .card-div {
    width: 100%;
    @media screen and (min-width: 576px) {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }
    @media screen and (min-width: 1100px) {
      align-items: center;
    }
  }
  .card {
    max-width: 100%;
    width: 100%;
    flex-shrink: 0;
    border-radius: 16px;
    box-shadow: 0px 4px 14px 0px #0000001a;
    margin-bottom: 10px;
    @media screen and (min-width: 576px) {
      margin-bottom: 0;
      max-width: 210px;
    }
  }
  .image-div {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    figure {
      border-radius: 20px 20px 0px 0px;
      overflow: hidden;
      height: 150px;
      @media screen and (min-width: 576px) {
        height: 125px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
    border: 1px solid black;
    font-size: 11px;
    width: 75px;
    height: 37px;
    text-align: center;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(78, 97, 153, 1);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .decription {
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
    margin-right: 20px;
    h3 {
      max-width: 220px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 26px;
      line-height: 32.76px;
      font-weight: 500;
    }
    .address {
      display: block;
      margin-bottom: 5px;
      max-width: 350px;
      width: 100%;

      font-size: var(--font-size-sm);
      @media screen and (max-width: 1300px) {
        max-width: 255px;
      }
      @media screen and (max-width: 1099px) {
        max-width: 100%;
        width: 100%;
        white-space: pre-wrap;
      }
    }
    span {
      display: flex;
      font-size: var(--font-size-sm);
      .deadline {
        color: rgba(215, 65, 32, 1);
      }
    }
  }
  .values-div {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 10px 20px;
    flex-wrap: wrap;
    margin: 15px 0;
    @media screen and (min-width: 1100px) {
      border-right: 0.5px solid #cdcdcd;
      border-left: 0.5px solid #cdcdcd;
      margin: 0;
    }
    h3 {
      font-size: var(--font-size-xl);
      font-weight: 600;
      padding-top: 10px;
    }
  }
  .btnWrapper {
    padding: 0px 26px 0px 21px;
    .button {
      flex-shrink: 0;
      margin: 0 10px;
      margin-bottom: 16px;
    }
    .viewDetail {
      margin-bottom: 10px;
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
    padding: 0px;
    .btnWrapper {
      flex-direction: row;
      .button {
        width: auto;
      }
    }
    .CardWrapper {
      padding-top: 11px;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 0px;
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

  @media only screen and (max-width: 420px) {
    .tagWrapper {
      left: 8px;
      gap: 34px;
    }
  }
`;
