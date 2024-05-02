import styled from "styled-components";

export const ProductDescriptionWrapper = styled.div`
  width: 100%;
  @media (min-width: 576px) {
    max-width: 60%;
  }
  @media (min-width: 992px) {
    max-width: 40%;
  }
  @media (min-width: 1200px) {
    max-width: 35%;
  }
  @media (min-width: 1400px) {
    max-width: 30%;
  }
  .seller {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 20px 20px;
    background-color: rgba(64, 143, 140, 0.1);
    padding: 15px;
    @media (min-width: 576px) {
      padding: 20px;
    }
    @media (min-width: 1400) {
      padding: 20px 40px;
    }
    .user-name {
      display: block;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .text {
      display: block;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 12px;
    }
  }
  .profilepic {
    width: 90px;
    height: 90px;
    background: var(--dark);
    border-radius: 50px;
    overflow: hidden;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .viewprofile,
  .message {
    span {
      font-size: 14px;
      line-height: 18px;
      @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .viewprofile {
    cursor: pointer;
    display: flex;
    gap: 3px;
    color: rgba(64, 143, 140, 1);
    @media (min-width: 576px) {
      gap: 6px;
    }
    .icon {
      font-size: 18px;
    }
  }
  .investment {
    margin-bottom: 20px;
    @media (min-width: 992px) {
      margin-bottom: 30px;
      padding-left: 20px;
      border-left: 1px solid var(--gray-2);
    }
    @media (min-width: 1400px) {
      padding-left: 30px;
    }
    span {
      font-size: var(--font-size-sm);
    }
    .amountdiv {
      display: flex;
      gap: 20px;
      margin-bottom: 10px;
      padding: 0 25px;
      @media (min-width: 400px) {
        gap: 22px;
        justify-content: space-between;
      }
      @media (min-width: 1500px) {
        gap: 40px;
      }

      > div {
        width: 50%;
        border-right: 1px solid var(--gray-2);
        &:nth-last-child(1) {
          border: none;
        }
      }
      span {
        display: block;
        margin-bottom: 5px;
      }
      .amount {
        display: block;
        font-size: 18px;
        line-height: 20px;
        font-weight: 600;
        @media (min-width: 1200px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
    .total {
      width: 100%;
      background-color: rgba(78, 97, 153, 0.1);
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-size: var(--font-size-sm);
      padding: 12px 16px;
      span {
        font-size: var(--font-size-xl);
        font-weight: 600;
        padding-left: 6px;
      }
    }
  }
  .message {
    cursor: pointer;
    color: rgba(78, 97, 153, 1);
    display: flex;
    gap: 6px;
    .icon {
      font-size: 18px;
    }
  }
  .btnwrapper {
    display: flex;
    gap: 12px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    .description {
      width: 64%;
    }
  }
  @media only screen and (max-width: 992px) {
    .description {
      width: 59%;
    }

    .profilepic {
      width: 70px;
      height: 70px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 0px;
    .descwrapper {
      flex-direction: column;
      align-items: flex-start;
      gap: 50px;
    }
    .description {
      width: 100%;
    }

    .profilepic {
      width: 90px;
      height: 90px;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 00px 0px;
    .descwrapper {
      gap: 26px;
    }

    .description {
      h4 {
        font-size: var(--font-size-xl);
      }
      span {
        font-size: var(--font-size-sm);
      }
    }
  }
`;
