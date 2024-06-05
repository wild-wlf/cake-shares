import styled from 'styled-components';

export const SearchFiltersWrapper = styled.div`
  padding: 26px 0 40px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  .dropdown-div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    input {
      width: 100%;
      border: 1px solid rgba(241, 241, 241, 1);
      border-radius: 100px;
      font-size: var(--font-size-xs);
      font-family: var(--base-font-family);
      outline: none;
      padding: 13px;
    }
  }
  .volumeWrapper {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
    font-size: 14px;
    .inputWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
      input {
        width: 100%;
        border: 1px solid rgba(241, 241, 241, 1);
        border-radius: 100px;
        height: 45px;
        font-size: var(--font-size-xs);
        font-family: var(--base-font-family);
        outline: none;
        padding: 13px;
      }
    }
  }
  .btn-wrapper {
    height: 45px;
    max-width: 120px;
    width: 100%;
    margin-top: 25px;
  }

  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
    .dropdown-div {
      width: 48%;
    }
    .volumeWrapper {
      width: 48%;
    }
    .btn-wrapper {
      max-width: 200px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0px 30px 0px;
  }
  @media only screen and (max-width: 576px) {
    padding: 30px 0px 20px 0px;
    .btn-wrapper {
      max-width: 48%;
    }
  }
`;
