import React, { useContext } from 'react';
import { HandleKycModalWrapper } from './HandleLoginModal.styles';
import Button from '@/components/atoms/Button';
import { KycContext } from '@/context/KycContext';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import Toast from '../Toast';

const UpgradeKycLevelModal = ({ reqKycLevel, setOpen }) => {
  const { checkKycLevel } = useContext(KycContext);
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  function updateKyc() {
    if (user.isKycRequested) {
      Toast({
        type: 'info',
        message: 'You already reqeusted for upgrade!',
      });
    } else {
      checkKycLevel();
    }
    setOpen(false);
  }
  return (
    <HandleKycModalWrapper>
      <span className="title">More verification is required to continue!</span>
      <p>
        This product requires a higher level of identity verification (KYC level {reqKycLevel}). To continue, please
        upgrade your KYC information.
      </p>

      <div className="btn-holder">
        <Button btntype="white" color="success" rounded md block onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button btntype="primary" color="success" rounded md onClick={updateKyc}>
          Upgrade KYC
        </Button>
      </div>
    </HandleKycModalWrapper>
  );
};

export default UpgradeKycLevelModal;
