import styled from "styled-components";

export const ProductDescriptionWrapper = styled.div`
  padding: 33px 0px 30px 0px;
  .descwrapper {
    padding-top: 36px;
    display: flex;
    align-items: flex-end;
    gap: 75px;
  }
  .description {
    width: 69%;
    h4 {
      font-size: var(--h2-font-size);
      font-weight: 500;
      padding-bottom: 16px;
    }
    span {
      font-size: var(--h4-font-size);
    }
  }
  .seller {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 30%;
    height: 130px;
    border-radius: 20px 20px;
    background-color: rgba(64, 143, 140, 0.1);
    span {
      font-size: var(--font-size-sm);
    }
    h3 {
      font-size: 1.375rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
  .profilepic {
    width: 90px;
    height: 90px;
    background: var(--dark);
    border-radius: 90px;
    img {
      object-fit: cover;
      height: 100%;
      border-radius: 50px;
    }
  }
  .viewprofile {
    cursor: pointer;
    display: flex;
    gap: 6px;
    color: rgba(64, 143, 140, 1);
    .icon {
      font-size: 18px;
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
    padding-top: 12px;
  }

  @media only screen and (max-width: 1200px) {
    .description {
      width: 64%;
    }
    .seller {
      width: 35%;
    }
  }
  @media only screen and (max-width: 992px) {
    .description {
      width: 59%;
    }
    .seller {
      width: 40%;
    }
    .profilepic {
      width: 70px;
      height: 70px;
    }
    .seller {
      span {
        font-size: var(--font-size-xs);
      }
      h3 {
        font-size: var(--font-size-xl);
        font-weight: 600;
        margin-bottom: 8px;
      }
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
    .seller {
      width: 60%;
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
    .seller {
      width: 100%;
      gap: 10px;
      span {
        font-size: var(--font-size-xs);
      }
      h3 {
        font-size: var(--font-size-xl);
      }
      .icon {
        font-size: 16px;
      }
    }
  }
`;
