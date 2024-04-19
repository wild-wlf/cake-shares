import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 50px;
  .maindiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 46px;
  }
  .slider {
    width: 995px;
  }
  .search {
    width: 300px;
    position: relative;

    input {
      cursor: pointer;
      width: 100%;
      color: rgba(64, 143, 140, 1);
      background-color: rgba(64, 143, 140, 0.1);
      padding: 12px 20px 12px 20px;
      border-radius: 60px;
      border: 0px;
      outline: none;
      height: 42px;
      position: relative;
      display: inline-flex;
      align-items: center;
      font-family: var(--base-font-family);
      font-size: 14px;
    }
    .searchicon {
      position: absolute;
      right: 19px;
      top: 12px;
      color: rgba(64, 143, 140, 1);
    }
  }
  @media only screen and (max-width: 1250px) {
    .slider {
      width: 850px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .slider {
      width: 700px;
    }
  }
  @media only screen and (max-width: 992px) {
    .slider {
      width: 500px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 40px 30px;
    .slider {
      width: 340px;
    }
  }
  @media only screen and (max-width: 620px) {
    .maindiv {
      flex-direction: column;
      gap: 16px;
    }
    .slider {
      width: 100%;
    }
    .search {
      width: 100%;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 40px 20px;
  }
`;
