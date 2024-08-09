import styled from 'styled-components';

export const Wrapper = styled.div`
  span {
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
  input {
    width: 100%;
    border: 1px solid rgba(241, 241, 241, 1);
    border-radius: 100px;
    height: 40px;
    font-size: var(--font-size-xs);
    font-family: var(--base-font-family);
    outline: none;
    padding: 13px;
  }
  .searchby {
    padding-top: 26px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .investmenttype {
    padding: 26px 0px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    .dropdown-div {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }
  }
  .min-values-div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    .minvalues {
      /* width: 25%; */
    }
  }

  .checkbox {
    display: flex;
    gap: 16px;
    padding-top: 26px;
  }

  .rangeSlider {
    .heading {
      font-weight: 500;
      margin-bottom: 24px;
    }
  }

  .volume-div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .inputWrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      max-width: 200px;
      input {
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .investmenttype {
      padding: 16px 0px;
      display: flex;
      flex-direction: column;
    }
    .min-values-div {
      padding: 16px 0px;
      flex-wrap: wrap;
      .minvalues {
        width: 48%;
      }
    }
  }
`;
export const Sort = styled.div`
  position: relative;
  &.active {
    .sort-list {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .dropdown {
    justify-content: space-between;
  }
  .sort-list {
    position: absolute;
    top: 50px;
    left: 0;
    transform: translateY(50px);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    z-index: 1;
    .list {
      width: 160px;
      padding: 15px;
      border-radius: 15px;
      background: var(--white);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      span {
        display: block;
        color: var(--matte-black);
      }
    }
  }
`;
