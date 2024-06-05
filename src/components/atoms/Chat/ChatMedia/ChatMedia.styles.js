import styled from 'styled-components';

export const StyledChatMedia = styled.div`
  max-width: 370px;
  width: 100%;
  border-radius: 40px 40px 20px 20px;
  background: rgba(64, 143, 140, 0.1);
  padding: 100px 36px 10px 36px;
  margin-top: 70px;
  position: relative;
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
`;
