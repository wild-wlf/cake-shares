import styled from "styled-components";

export const ProfileSec = styled.div`
  width: 230px;
  /* height: 290px; */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 16px 20px;
  border-radius: 20px;
  transition: 0.4s;
  background-color: #fff;
  position: absolute;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  transform: ${({ $show }) => ($show ? "translateY(5px)" : "translateY(-5px)")};
  top: 70px;
  right: 0;
  z-index: 999;
  overflow: hidden;
  .Profile-Picture {
    object-fit: cover;
  }
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #fff;
    gap: 10px;
    padding-bottom: 14px;

    .Dp {
      width: 60px;
      height: 60px;
      border-radius: 60px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--dark);
      img {
        max-width: 100%;
        height: 100%;
        display: block;
      }
    }
    .Edit {
      max-width: 125px;

      h3 {
        max-width: 125px;
        overflow: hidden;
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h4 {
        font-size: 12px;
        font-weight: 300;
        padding-top: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .Dets {
    width: 100%;

    .DarkTheme {
      padding-top: 14px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      h5 {
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
      }
    }

    .LogOut {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-top: 14px;
      gap: 15px;
      h5 {
        color: var(--Alert-Red, #e00000);
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 446px) {
    width: 300px;
    right: 2.8%;
  }
`;
