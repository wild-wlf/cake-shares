import { useState, useEffect, createContext } from 'react';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from './authContext';

export const KycContext = createContext();

export const KycContextProvider = ({ children }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [kycLevel, setKycLevel] = useState(user?.kycLevel);
  const [kyc1, setKyc1] = useState(false);
  const [kyc2, setKyc2] = useState(false);
  const [kyc3, setKyc3] = useState(false);

  function checkKycLevel() {
    if (kycLevel === 0) {
      setKyc1(true);
    } else if (kycLevel === 1) {
      setKyc2(true);
    } else if (kycLevel === 2) {
      setKyc3(true);
    }
  }

  useEffect(() => {
    if (user && user.kycLevel !== undefined) {
      setKycLevel(user.kycLevel);
    }
  }, [user]);

  const contextValue = {
    kycLevel,
    setKycLevel,
    kyc1,
    setKyc1,
    kyc2,
    setKyc2,
    kyc3,
    setKyc3,
    checkKycLevel,
  };
  return <KycContext.Provider value={contextValue}>{children}</KycContext.Provider>;
};
