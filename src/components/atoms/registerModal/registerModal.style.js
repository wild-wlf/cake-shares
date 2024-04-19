import styled from "styled-components";

export const Container = styled.div`
  padding-top: 26px;
  .heading {
    font-size: 20px;
    font-weight: 400;
  }
  @media only screen and (max-width: 768px) {
    .heading {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 576px) {
    .heading {
      font-size: 16px;
    }
  }
`;

export const OptionsWrapper = styled.div`
  padding-top: 26px;
`;

export const Option = styled.div`
  position: relative;
  height: 130px;
  user-select: none;
  margin-bottom: 20px;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  gap: 17px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 24px;

  .imgContainer {
    height: 75px;
    min-width: 60px;
  }
  .imgContainer img {
    height: 75px;
    width: 75px;
  }
  .textContainer {
    max-width: 320px;
    min-width: 143px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 9px;
    .optionName {
      font-size: 22px;
      font-weight: 500;
    }
    p {
      font-size: 11px;
      font-weight: 300;
    }
  }

  .custom-radio {
    height: 100%;
    display: flex;
    align-items: flex-start;
    input {
      display: none;
    }
    input[type="radio"] + div {
      display: inline-block;
      cursor: pointer;
      line-height: 1em;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    input[type="radio"] + div:before,
    input[type="radio"] + div:after {
      content: "";
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      text-align: center;
      color: white;
      border-radius: 50%;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    input[type="radio"] + div:before {
      border: 1px solid #dadada;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      box-shadow: inset 0 0 0 0.2em #f1f1f1, inset 0 0 0 1.5em #f1f1f1;
    }
    input[type="radio"] + div:hover:before {
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      box-shadow: inset 0 0 0 0.3em white, inset 0 0 0 1.5em #c6c6c6;
    }
    input[type="radio"]:checked + div:before {
      border: 1px solid #408f8c;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      box-shadow: inset 0 0 0 0.1em white, inset 0 0 0 1.5em #408f8c;
    }
  }
  @media only screen and (max-width: 768px) {
    .textContainer {
      .optionName {
        font-size: 20px;
      }
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 16.76px;
    .textContainer {
      .optionName {
        font-size: 16px;
      }
      p {
        font-size: 10px;
      }
    }
  }
  @media only screen and (max-width: 420px) {
    .textContainer {
      max-width: 170px;
    }
    .imgContainer {
      max-width: 60px;
    }
  }
`;
