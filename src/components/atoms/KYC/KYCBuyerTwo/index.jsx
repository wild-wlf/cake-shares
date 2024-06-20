import React, { useState } from 'react';
import { Step, StepWrapper, StepWrapperContainar, StyledKycBuyer } from '../KYCBuyer/KycBuyer.styles';
import UploadFile from '@/components/molecules/UploadFile';
import Button from '../../Button';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import Select from '../../Select';
import Field from '../../Field';
import kycService from '@/services/kycService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import Toast from '@/components/molecules/Toast';

const KycBuyerLevelTwo = ({ setOpen, setKycLevel }) => {
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  const [form] = useForm();
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const onSubmit = async data => {

    if (step === 1) {
      setStep(2);
      return;
    }
    const { residenceProofImage, ...bankDetails } = state;
    try {
      setIsLoading(true);
      const payload = {
        userId: user?._id,
        kycRequestLevel: 2,
        residenceProofImage,
        bankDetails,
      };
      const formDataToSend = new FormData();
      Object.keys(payload).forEach(key => {
        if (key === 'bankDetails' && typeof payload[key] === 'object') {
          formDataToSend.append(key, JSON.stringify(payload[key]));
        } else {
          formDataToSend.append(key, payload[key]);
        }
      });
      await kycService.requestKyc(formDataToSend);
      Toast({
        type: 'success',
        message: `KYC for Level 2 Requested Successfully!`,
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
  };
  return (
    <StyledKycBuyer>
      <div className="twoCol">
        <span className="kycdiscreption">Verification required. Please provide some details.</span>
        <StepWrapperContainar>
          <span className="stepStatus">Step {step} of 2</span>
          <StepWrapper $width={step}>
            <Step $bg={step >= 1} />
            <Step $bg={step == 2} />
          </StepWrapper>
        </StepWrapperContainar>
      </div>
      <Form form={form} onSubmit={onSubmit} onTouched={_ => setState(__ => ({ ...__, ..._ }))}>
        {step == 1 && (
          <>
            <Form.Item
              type="text"
              label="Bank Name"
              name="bankName"
              placeholder="Bank of England"
              rules={[
                { required: true },
                {
                  pattern: /^.{0,256}$/,
                  message: 'Maximum Character Length is 256',
                },
              ]}>
              <Field />
              {/* <Select options={optionData} /> */}
            </Form.Item>
            <div className="combineFields">
              <Form.Item
                type="text"
                label="Account Holder Name"
                name="accountHolder"
                placeholder="Alex Mertiz"
                rules={[
                  { required: true },
                  {
                    pattern: /^.{0,256}$/,
                    message: 'Maximum Character Length is 256',
                  },
                ]}>
                <Field />
              </Form.Item>
              <Form.Item
                type="num"
                label="Account no"
                name="accountNumber"
                placeholder="35402755003895"
                rules={[
                  { required: true },
                  {
                    pattern: /^.{0,256}$/,
                    message: 'Maximum Character Length is 256',
                  },
                ]}>
                <Field />
              </Form.Item>
            </div>
            <Button
              className={'stepOneButton'}
              rounded
              sm
              btntype="primary"
              width="134"
              // onClick={() => setStep(2)}
              htmlType="submit">
              Continue
            </Button>
          </>
        )}
        {step == 2 && (
          <>
            <label htmlFor="" className="fakelabel">
              Residence Proof
            </label>
            <div className="combineField">
              <Form.Item
                rounded
                name="residenceProofImage"
                rules={[{ required: true, message: 'Please Upload Residence Proof!' }]}>
                <Field
                  type="file"
                  fileSize="5"
                  accept="image/jpeg, image/jpg, image/png, application/pdf"
                  uploadTitle="Upload a copy of bills, bank statement"
                  onChange={e => console.log(e)}
                />
              </Form.Item>
            </div>
            <Button rounded loader={isLoading} md btntype="primary" width="214" htmlType="submit">
              Complete Verification
            </Button>
          </>
        )}
      </Form>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelTwo;
