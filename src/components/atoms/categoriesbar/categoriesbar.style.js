import styled from "styled-components";

export const CategoriesBarWrapper = styled.div`
  padding: 40px 0;
  .maindiv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 46px;
  }
  .slick-track {
    display: flex;
    gap: 16px;
  }
  .slider {
    max-width: 80%;
  }
  .button {
    width: 100%;
    @media (max-width: 768px) {
      padding: 7px 5px;
      gap: 5px;
    }
    &.active {
      color: var(--green);
      border-color: var(--green);
    }
  }
  .lg {
    width: 140px;
  }
  .search {
    max-width: 300px;
    width: 100%;
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

  @media only screen and (max-width: 768px) {
    padding: 30px 0;

    .slider {
      max-width: 70%;
    }

    .search {
      max-width: 30%;
    }
  }
  @media only screen and (max-width: 576px) {
    .maindiv {
      flex-direction: column;
      gap: 16px;
    }
    .slider {
      max-width: 100%;
    }

    .search {
      max-width: 100%;
    }
  }
`;
