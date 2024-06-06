import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 27px 0px 10px;
  position: relative;
  .chatWrapper {
    width: 100%;
    position: relative;
    padding: 70px 0px 55px 0px;
  }
  .hamburger {
    cursor: pointer;
    @media screen and (min-width: 1199px) {
      display: none;
    }
  }
`;

export const ChatBody = styled.div`
  height: 733px;
  overflow: auto;
  padding-right: 8px;
  .messages-holder {
    margin-bottom: 20px;
  }
`;
