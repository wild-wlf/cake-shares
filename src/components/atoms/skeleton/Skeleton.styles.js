import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
100%{
    background-position: -100% 0;
}
`;

export const StyledSkeleton = styled.div`
  background-image: linear-gradient(
    120deg,
    #ececec 50%,
    #fafafa 60%,
    #fafafa 61%,
    #ececec 70%
  );
  background-size: 200%;
  background-position: 100% 0;
  height: ${({ height }) => (height ? `${height}px` : "")};
  animation: ${fadeIn} 1s linear infinite;
  margin-bottom: ${({ margin }) => (margin ? margin : "0")};

${({ resp }) => resp ? css`
  width: ${({ width }) => (width ? `${width}px` : "")};

` : css`
  width: ${({ width }) => (width ? `${width}%` : "")};
`};

  ${({ circle }) => circle ?
    css`
        border-radius :50%;
      ` : css`
  border-radius: ${({ radius }) => (radius ? radius : "5px")};
      
      `
};
  @media screen and (max-width: 1440px) {

    ${({ resp }) => resp ? css`
   width: ${({ width, minWidth }) => (
      width,
      minWidth
        ? `calc(${minWidth}px + (${width} - ${minWidth}) * (100vw - 390px) / (1440 - 390))`
        : `${width}px`
    )};

` : css`
   width: ${({ width, minWidth }) => (
      width,
      minWidth
        ? `calc(${minWidth}% + (${width} - ${minWidth}) * (100vw - 390px) / (1440 - 390))`
        : `${width}%`
    )};
`};
   
    height: ${({ height, minHeight }) => (
      height,
      minHeight
        ? `calc(${minHeight}px + (${height} - ${minHeight}) * (100vw - 390px) / (1440 - 390))`
        : `${height}px`
    )};
  }
`;
