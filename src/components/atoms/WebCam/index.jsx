/* eslint-disable react/display-name */
import React from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import {
  StyledWebCam,
  WebCamHolder,
  CaptureButton,
  RefreshButton,
  ImgPreview,
} from "./WebCam.styles";
// import Alert from "../Alert";
// import Tooltip from "../../atoms/Tooltip";
import { Error } from "../Field/Field.styles";
import { StyledFormGroup } from "../../../styles/helpers.styles";

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

const WebCam = React.forwardRef(
  (
    {
      onClick,
      flash,
      setSelfie,
      setFlash,
      value,
      noMargin,
      onChange,
      error,
      success,
      ...props
    },
    ref
  ) => (
    <StyledFormGroup>
      {/* <Alert
        type="info"
        message="Please place your face inside the frame and take photo."
        css="margin-bottom: 20px;"
      /> */}
      <WebCamHolder
        error={error}
        success={success}
        flash={flash}
        noMargin={noMargin}
      >
        <StyledWebCam
          {...props}
          mirrored
          audio={false}
          ref={ref}
          screenshotFormat="image/jpeg"
          setSelfie={(x) => onChange({ target: { value: x } })}
        />
        <CaptureButton
          type="primary"
          shape="circle"
          size={58}
          onClick={onClick}
        >
          ddd
          {/* <Tooltip title="Take Photo">
            <i className="icon-camera" />
          </Tooltip> */}
        </CaptureButton>
        {value && (
          <RefreshButton
            type="primary"
            shape="circle"
            size={32}
            onClick={() => {
              onChange({ target: { value: "" } });
              setFlash(false);
            }}
          >
            ddd
            {/* <Tooltip title="Recapture Selfie">
              <i className="icon-refresh" />
            </Tooltip> */}
          </RefreshButton>
        )}
        {value && <ImgPreview src={value} />}
      </WebCamHolder>
      {error && <Error role="alert">{error}</Error>}
    </StyledFormGroup>
  )
);

WebCam.propTypes = propTypes;

export default WebCam;
