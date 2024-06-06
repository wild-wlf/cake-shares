import styled from 'styled-components';

export const StyledChatMedia = styled.div`
  max-width: 370px;
  width: 100%;
  border-radius: 40px 40px 20px 20px;
  background: rgba(64, 143, 140, 0.1);
  padding: 73px 36px 10px 36px;
  margin-top: 70px;
  position: relative;
  color: var(--base-text-color);
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
  }
  .title {
    color: var(--base-text-color);
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
      color: #313131;
      font-size: 12px;
      font-weight: 300;
      line-height: 16px;
      text-align: center;

      .image-warp {
        width: 80px;
        margin: 0 auto 15px;
        height: 80px;
        border-radius: 50%;
        background: #313131;
        display: flex;
        align-items: flex-start;
        overflow: hidden;
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
`;
