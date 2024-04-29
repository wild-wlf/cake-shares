import styled from "styled-components";

export const SearchHeaderWrapper = styled.div`
  padding: 30px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .headWrapper {
    display: flex;
    justify-content: space-between;
  }
  .heading {
    font-size: 32px;
    font-weight: 500;
  }
  .sorting {
    display: flex;
    align-items: center;
  }
  .sort-list {
    right: 0;
    left: auto;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0px 0px 0px;
    .heading {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 30px 0px 0px 0px;
    .heading {
      font-size: 20px;
    }
    .headWrapper {
      gap: 48px;
    }
    .sorting {
      flex-wrap: wrap;
      justify-content: end;
    }
  }
`;
