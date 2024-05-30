import React, { useState } from 'react';
import { Step, StepWrapper, StepWrapperContainar, StyledKycBuyer } from '../KYCBuyer/KycBuyer.styles';
import UploadFile from '@/components/molecules/UploadFile';
import Button from '../../Button';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import Select from '../../Select';
import Field from '../../Field';
import WebCam from '../../WebCam';
import kycService from '@/services/kycService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/components/Context/authContext';
import Toast from '@/components/molecules/Toast';

const KYCBuyerThree = ({ setOpen, setKycLevel }) => {
  const [form] = useForm();
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const optionData = [{ label: 'Buyer Level Two', value: 'Buyer Level Two' }];
  async function handelKycLevel(imageSrc) {
    try {
      setIsLoading(true);
      const payload = {
        userId: user?._id,
        kycRequestLevel: 3,
        // imageSrc,
      };
      const formDataToSend = new FormData();
      Object.keys(payload).forEach(key => {
        formDataToSend.append(key, payload[key]);
      });
      await kycService.requestKyc(formDataToSend);
      Toast({
        type: 'success',
        message: `KYC for Level 3 Requested Successfully!`,
      });
      setOpen(false);
      setPermission(prev => !prev);
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <StyledKycBuyer>
      <div className="twoCol">
        <span className="kycdiscreption">Biometric Verification required.</span>
      </div>
      <label htmlFor="" className="fakelabel">
        Facial Recognition
      </label>
      <WebCam handelKycLevel={handelKycLevel} />
    </StyledKycBuyer>
  );
};

export default KYCBuyerThree;
