/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { StyledWebCam, WebCamHolder, CaptureButton, RefreshButton, ImgPreview, ImageWrapper } from './WebCam.styles';
// import Alert from "../Alert";
// import Tooltip from "../../atoms/Tooltip";
import { Error } from '../Field/Field.styles';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import Button from '../Button';
import Image from 'next/image';
import { FaRedoAlt } from 'react-icons/fa';
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
  facingMode: 'environment',
};
const WebCam = ({ handelKycLevel, isLoading }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = e => {
    console.log(e);
  };
  return (
    <StyledFormGroup>
      {/* <Alert
        type="info"
        message="Please place your face inside the frame and take photo."
        css="margin-bottom: 20px;"
      /> */}
      <WebCamHolder $preview={url}>
        {url == null && (
          <>
            <StyledWebCam
              mirrored
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
            />
            <Button rounded sm btntype="primary" width="214" onClick={capturePhoto}>
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

            <Button className={'undoButton'} rounded sm btntype="primary" onClick={() => setUrl(null)}>
              <FaRedoAlt />
            </Button>
          </>
        )}
      </WebCamHolder>
      {url && (
        <Button rounded loader={isLoading} sm btntype="primary" width="214" onClick={() => handelKycLevel(url)}>
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
