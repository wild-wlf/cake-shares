import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  padding: 27px 0px;
  width: 100%;
  .chat-div {
    max-width: 866px;
    width: 100%;
  }
`;
export const ChatHeader = styled.header`
  background-color: rgba(78, 97, 153, 0.1);
  border-radius: 60px;
  padding: 7px 0px 7px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
  h6 {
    font-size: 20px;
    font-weight: 400;
  }
  span {
    font-size: 12px;
    font-weight: 300;
  }
`;
export const ChatBody = styled.div`
  min-height: 50vh;
`;
export const ChatFooter = styled.footer`
  width: 100%;
  display: flex;
  gap: 6px;
  .input-wrapper {
    max-width: 823px;
    width: 100%;
    height: 40px;
    padding: 10px 17px;
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
      }
    }
    .icons-div {
      display: flex;
      gap: 11px;
    }
  }
  .send-icon {
    width: 40px;
    height: 40px;
    background: rgba(64, 143, 140, 0.2);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
