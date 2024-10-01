import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 27px 0px 10px;
  position: relative;
  overflow: hidden;
  .chatWrapper {
    width: 100%;
    position: relative;
    padding: 70px 0px 55px 0px;
  }
  .hamburger {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 40px;

    @media screen and (min-width: 1199px) {
      display: none;
      position: static;
    }
  }
`;

export const ChatBody = styled.div`
  height: calc(100vh - 310px);
  overflow: auto;
  padding-right: 8px;
`;
