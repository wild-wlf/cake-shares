import styled from 'styled-components';

export const ChatFooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  gap: 6px;
  position: absolute;
  bottom: 0;
  .input-wrapper {
    width: 100%;
    height: 40px;
    padding: 7px 17px 5px 17px;
    border-radius: 60px;
    border: 1px solid rgba(205, 205, 205, 1);
    display: flex;
    justify-content: space-between;
    gap: 10px;
    img {
      cursor: pointer;
    }
    .input-div {
      display: flex;
      gap: 8px;
      width: 100%;
      input {
        border: 0px;
        font-family: Outfit;
        font-size: 12px;
        font-weight: 300;
        line-height: 12.6px;
        outline: none;
        max-width: 800px;
        width: 100%;
        margin-top: -10px;
        height: 30px;
      }
    }
    .icons-div {
      display: flex;
      gap: 11px;
    }
  }
  .send-icon {
    height: 40px;
    background: rgba(64, 143, 140, 0.2);
    border-radius: 50px;
    padding: 15px 12px;
  }
`;
