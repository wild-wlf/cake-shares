import styled from 'styled-components';

export const ChatHeaderWrapper = styled.header`
  background-color: rgba(78, 97, 153, 0.1);
  border-radius: 60px;
  padding: 7px 0px 7px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 0;
  width: 100%;
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
