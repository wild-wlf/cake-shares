import React, { useContext, useState } from 'react';
import KycLevel from '../KYC/KycLevel';
import Link from 'next/link';
import { FaWallet } from 'react-icons/fa';
import { MdStorefront } from 'react-icons/md';
import LogOut from '../../../_assets/logoutIcon.png';
import Image from 'next/image';
import privacyPolicyIcon from '../../../_assets/privacyPolicyIcon.png';
import privacySettingIcon from '../../../_assets/privacySettingIcon.png';
import termsIcon from '../../../_assets/termsIcon.png';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { UserContext } from '@/context/UserContext';

const SideNavItems = ({ user, router }) => {
  const { onLogout } = useContextHook(AuthContext, v => ({
    onLogout: v.onLogout,
  }));
  const { privacyPolicy, setPrivacyPolicy, privacySetting, setPrivacySetting, termsCondition, setTermsCondition } =
    useContext(UserContext);
  return (
    <>
      <div className="kycFieldWrapper">
        <div className="kycField">
          <span className="heading">My Kyc Level</span>
          <span>{user?.kycLevel}</span>
        </div>
        <KycLevel level={user?.kycLevel + 1} bg />
      </div>
      <Link href="/" className={router === '/' ? 'textField textField-home' : 'textField'}>
        <MdStorefront />
        <span>Marketplace</span>
      </Link>
      <Link href="/wallet">
        <div className="wallet2">
          <FaWallet />
          <span>My Wallet</span>
        </div>
      </Link>

      <div
        className="wallet2"
        onClick={() => {
          setPrivacyPolicy(!privacyPolicy);
        }}>
        <Image src={privacyPolicyIcon} alt="Privacy Policies" width={17} height={17} />
        <h5>Privacy Policy</h5>
      </div>
      {/* <div
        className="wallet2"
        onClick={() => {
          setPrivacySetting(true);
        }}>
        <Image src={privacySettingIcon} alt="Privacy Settings" width={17} height={17} />
        <h5>Privacy Settings</h5>
      </div> */}
      <div
        onClick={() => {
          setTermsCondition(!termsCondition);
        }}>
        <div className="wallet2" style={{ paddingBottom: '14px' }}>
          <Image src={termsIcon} alt="Terms & Conditions" width={17} height={17} />
          <h5>Terms & Conditions</h5>
        </div>
      </div>

      <div
        className="LogOut"
        onClick={() => {
          onLogout();
        }}>
        <Image className="Logo" width={20} height={20} src={LogOut} alt="Settings" />
        <h5>Logout</h5>
      </div>
    </>
  );
};

export default SideNavItems;
