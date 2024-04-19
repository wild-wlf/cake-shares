import styled from "styled-components";

export const Closer = styled.div``;

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(50, 59, 75, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
  padding: 20px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const ContentHolder = styled.div`
  max-width: ${({ width }) => (width ? `${width}px` : "100%")};
  width: ${({ width }) => (width ? "100%" : "")};
  padding: ${({ padding }) => padding ?? ""}; // must prop
  background: ${({ bg }) => bg ?? ""}; // must props
  border-radius: ${({ radius }) => radius ?? "30px"};
  animation: myAnim 0.3s ease;
  background: var(--white);
  max-height: 100%;
  padding: 30px;
  overflow-y: auto;

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 20px;
  }
`;

export const Head = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  strong {
    font-size: 32px;
    font-weight: 400;
  }

  .closer {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    strong {
      font-size: 26px;
    }
  }
  @media only screen and (max-width: 576px) {
    strong {
      font-size: 20px;
    }
  }
`;
