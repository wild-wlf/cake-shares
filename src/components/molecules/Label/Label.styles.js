import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  font-size: var(--font-size-sm);
  line-height: 1;
  color: var(--dark);
  font-weight: 500;
  margin-bottom: 0.625rem;
  display: block;
  pointer-events: ${({ $onlyRead }) => $onlyRead && "none"};
  ${({ labelIcon }) =>
    labelIcon &&
    css`
      display: flex;
      align-items: center;
    `}
  ${({ $labelReverse }) =>
    $labelReverse &&
    css`
      position: relative;
      .label {
        flex-direction: row-reverse;
      }
    `};
  .label {
    display: flex;
    align-items: center;
  }
`;

export const RequiredAsterisk = styled.span`
  color: rgba(215, 65, 32, 1);
  font-size: 14px;
`;
