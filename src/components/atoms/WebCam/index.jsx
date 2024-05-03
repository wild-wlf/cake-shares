/* eslint-disable react/display-name */
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import {
  StyledWebCam,
  WebCamHolder,
  CaptureButton,
  RefreshButton,
  ImgPreview,
  ImageWrapper,
} from "./WebCam.styles";
// import Alert from "../Alert";
// import Tooltip from "../../atoms/Tooltip";
import { Error } from "../Field/Field.styles";
import { StyledFormGroup } from "../../../styles/helpers.styles";
import Button from "../Button";
import Image from "next/image";
import { FaRedoAlt } from "react-icons/fa";
const propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  flash: PropTypes.bool,
  setSelfie: PropTypes.func,
  setFlash: PropTypes.func,
  noMargin: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
};
const videoConstraints = {
  width: 300,
  facingMode: "environment",
};
const WebCam = ({ handelKycLevel }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [stream, setStream] = useState(null);
  const [fetch, setFetch] = useState(false);
  const [error, setError] = useState(null);

  const requestAccess = async () => {
    try {
      console.log("inside");
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      console.log({ mediaStream });
      setStream(mediaStream);
    } catch (err) {
      console.error("Error accessing camera and/or microphone:", err);
      setError(err.message);
    }
  };

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    console.log("here");
  }, [webcamRef]);

  // console.log({ webcamRef });
  const onUserMedia = (e) => {
    //  console.log(e);
  };
  return (
    <StyledFormGroup>
      <button onClick={requestAccess}>
        Request Camera and Microphone Access
      </button>
      <button onClick={() => setFetch(!fetch)}>reload</button>
      <WebCamHolder $preview={url}>
        {url == null && fetch && (
          <>
            <StyledWebCam
              mirrored
              ref={webcamRef}
              audio={false}
              srcObject={stream}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
            />
            <Button
              rounded
              sm
              btntype="primary"
              width="214"
              onClick={capturePhoto}
            >
              Continue
            </Button>
          </>
        )}
        {url && (
          <>
            <div className="previewWrapper">
              <ImageWrapper>
                <Image src={url} width={200} height={200} alt="user" />
              </ImageWrapper>
            </div>

            <Button
              className={"undoButton"}
              rounded
              sm
              btntype="primary"
              onClick={() => setUrl(null)}
            >
              <FaRedoAlt />
            </Button>
          </>
        )}
      </WebCamHolder>
      {url && (
        <Button
          rounded
          sm
          btntype="primary"
          width="214"
          onClick={handelKycLevel}
        >
          Save
          {/* <Tooltip title="Recapture Selfie">
              <i className="icon-refresh" />
            </Tooltip> */}
        </Button>
      )}
      {/* {error && <Error role="alert">{error}</Error>} */}
    </StyledFormGroup>
  );
};

export default WebCam;
