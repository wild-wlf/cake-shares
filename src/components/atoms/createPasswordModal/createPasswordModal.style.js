import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 26px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  .description {
    font-size: var(--font-size-xl);
    font-weight: 300;
    line-height: 25px;
  }
  .input-div {
    display: flex;
    gap: 26px;
  }
`;
