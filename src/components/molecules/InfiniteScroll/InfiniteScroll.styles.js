import styled from 'styled-components';

export const InfiniteScrollWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Message = styled.p`
  text-align: center;
  padding: 15px 0px 15px 0px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  font-weight: 500;
`;
