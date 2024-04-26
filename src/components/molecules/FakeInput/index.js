import styled, { css } from "styled-components";

const FakeInput = styled.span`
  display: block;
  position: relative;
  width: 22px;
  height: 22px;
  border: 1px solid var(--primary);
  border: 1px solid ${({ $radioBorder }) => $radioBorder ?? "var(--white)"};
  margin-right: 14px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  line-height: 1px;

  ${({ $labelReverse }) =>
    $labelReverse &&
    css`
      position: absolute;
      right: 0;
      margin: 0 0 0 10px;
    `}
`;

export default FakeInput;
