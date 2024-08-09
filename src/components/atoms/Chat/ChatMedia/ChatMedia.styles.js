import styled from 'styled-components';

export const StyledChatMedia = styled.div`
  max-width: 370px;
  width: 100%;
  border-radius: 40px 40px 20px 20px;
  background: rgba(64, 143, 140, 0.1);
  padding: 73px 33px 10px 33px;
  margin-top: 70px;
  position: relative;
  color: var(--base-text-color);
  transition: 0.3s all ease-in-out;
  @media screen and (max-width: 1198px) {
    position: absolute;
    backdrop-filter: blur(5px);
    background: rgba(64, 143, 140, 1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    top: 28px;
    right: 60px;
    margin-top: 0px;
    color: var(--white);
    padding: 33px 15px 10px 15px;
    max-width: 340px;
    transform: translateX(200%);
    .chat-sidebar-active & {
      transform: translateX(0);
    }
  }
  .fakeBefore {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -55px;
    background: var(--green);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    outline: 10px solid var(--white);
    @media screen and (max-width: 1198px) {
      display: none;
    }
  }
  .title {
    /* color: var(--base-text-color); */
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
  .chat-between {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #d4dcdb;
    .col {
      /* color: #313131; */
      font-size: 12px;
      font-weight: 300;
      line-height: 16px;
      text-align: center;
      .image-warp {
        width: 80px;
        height: 80px;
        margin: 0 auto 15px;
        border-radius: 50%;
        background: #313131;
        position: relative;
        overflow: hidden;
        border-radius: 50%;

        img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 3px;
          right: 2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        &.online {
          &::after {
            background: var(--green);
          }
        }

        &.offline {
          &::after {
            background: var(--dark);
          }
        }
      }
      .userName {
        display: block;
        margin-bottom: 6px;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
  .community-col {
    color: #313131;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 11px;
    .images-wrapper {
      max-width: 120px;
      display: flex;
      flex-flow: wrap;
      gap: 20px;
      .img-holder {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(64, 143, 140, 1);
      cursor: pointer;
    }
  }
`;

export const StyledMediaSlide = styled.div`
  margin-bottom: 30px;
  padding-bottom: 10px;
  position: relative;
  .slideTitle {
    display: block;
    margin-bottom: 15px;
    /* color: #313131; */
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
  .slick-dots {
    display: block;
    top: auto;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    li {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: red;
      margin: 0 3px;
      background: var(--white);
      @media screen and (min-width: 1199) {
        background: rgba(78, 97, 153, 0.2);
      }
    }
    .slick-active {
      width: 35px;
      background: #4e6199;
    }
    button {
      &:before {
        display: none;
      }
      &::after {
        display: none;
      }
    }
  }
  .col-wrapper {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    padding: 0 2px;
    .col {
      width: 96px;
      height: 80px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
