import styled, { keyframes, css } from "styled-components";
import Webcam from "react-webcam";
import Button from "../../atoms/Button";
// import SelfieFrame from "../../../assets/images/selfie-frame.png";

const cameraFlash = keyframes`
  from {box-shadow: 0;}
  to {box-shadow: inset 0 0 0 200px var(--white);}
`;

export const WebCamHolder = styled.div`
  position: relative;
  background: var(--light-secondary);
  border-radius: 25px;
  overflow: hidden;
  border: ${({ error, success }) =>
    error
      ? "2px dashed var(--danger)"
      : success
      ? "2px dashed var(--success)"
      : "2px dashed var(--primary)"};
  &:after {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: 1;
    /* background: url(${SelfieFrame}) no-repeat; */
    background-size: contain;
    background-position: center center;
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 4;
    pointer-events: none;

    ${({ flash }) =>
      flash &&
      css`
        animation: ${cameraFlash} 0.8s ease-in-out 0.2s alternate-reverse 1;
      `};
  }
`;

export const StyledWebCam = styled(Webcam)`
  width: 100%;
  border-radius: 25px;
  display: block;
  clip-path: ellipse(25% 45% at 50% 50%);
`;

export const CaptureButton = styled(Button)`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  border: 13px solid var(--white);
  z-index: 2;
`;

export const ImgPreview = styled.img`
  border-radius: 25px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  object-fit: cover;
  width: 100%;
  height: 364px;
`;

export const RefreshButton = styled(Button)`
  position: absolute;
  right: 23px;
  bottom: 20px;
  z-index: 4;
`;
