import React, { useState } from 'react';
import { ProfileSec } from './ProfileMenu.Style';
import LogOut from '../../../_assets/logoutIcon.png';
import myProfileIcon from '../../../_assets/myProfileIcon.png';
import privacyPolicyIcon from '../../../_assets/privacyPolicyIcon.png';
import privacySettingIcon from '../../../_assets/privacySettingIcon.png';
import termsIcon from '../../../_assets/termsIcon.png';
import profilePlaceHolder from '../../../_assets/profileplaceHolder.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import CenterModal from '../../atoms/Modal/CenterModal';
import PrivacyPolicy from '@/components/atoms/PrivacyPolicyModal/PrivacyPolicy';
import TermsConditions from '@/components/atoms/TermsConditions/TermsConditions';
import PrivacySetting from '@/components/atoms/PrivacySettingModal/PrivacySetting';

const ProfileMenu = ({ openProfile }) => {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [privacySetting, setPrivacySetting] = useState(false);

  const [termsCondition, setTermsCondition] = useState(false);
  const { onLogout, user } = useContextHook(AuthContext, v => ({
    onLogout: v.onLogout,
    user: v.user,
  }));
  return (
    <>
      <CenterModal open={privacySetting} setOpen={setPrivacySetting} title="Privacy Setting" width="996">
        <PrivacySetting />
      </CenterModal>
      <CenterModal open={privacyPolicy} setOpen={setPrivacyPolicy} title="Privacy Policy" width="996">
        <PrivacyPolicy />
      </CenterModal>
      <CenterModal open={termsCondition} setOpen={setTermsCondition} title="Terms & Conditions" width="996">
        <TermsConditions />
      </CenterModal>
      <ProfileSec $show={openProfile}>
        <div className="top">
          <div className="Dp">
            {user.profilePicture ? (
              <Image
                src={user?.profilePicture}
                alt="Profile Picture"
                className="Profile-Picture"
                width={60}
                height={60}
              />
            ) : (
              <Image
                src={profilePlaceHolder}
                alt="Profile Picture"
                className="Profile-Picture"
                width={60}
                height={60}
              />
            )}
          </div>
          <div className="Edit">
            <h3>{user?.fullName}</h3>
            <h4>Buyer Account</h4>
          </div>
        </div>

        <hr />
        <div className="Dets">
          <Link href="/profile" passHref>
            <div className="DarkTheme">
              <Image src={myProfileIcon} alt="My profile" width={17} height={17} />
              <h5>My Profile</h5>
            </div>
          </Link>

          {/* <div
            className="DarkTheme"
            onClick={() => {
              setPrivacyPolicy(!privacyPolicy);
            }}>
            <Image src={privacyPolicyIcon} alt="Privacy Policies" width={17} height={17} />
            <h5>Privacy Policy</h5>
          </div>
          <div
            className="DarkTheme"
            onClick={() => {
              setPrivacySetting(true);
            }}>
            <Image src={privacySettingIcon} alt="Privacy Settings" width={17} height={17} />
            <h5>Privacy Settings</h5>
          </div>
          <div
            onClick={() => {
              setTermsCondition(!termsCondition);
            }}>
            <div className="DarkTheme" style={{ paddingBottom: '14px' }}>
              <Image src={termsIcon} alt="Terms & Conditions" width={17} height={17} />
              <h5>Terms & Conditions</h5>
            </div>
          </div> */}
          <hr />
          <div
            className="LogOut"
            onClick={() => {
              onLogout();
            }}>
            <Image className="Logo" width={20} height={20} src={LogOut} alt="Settings" />
            <h5>Logout</h5>
          </div>
        </div>
      </ProfileSec>
    </>
  );
};

export default ProfileMenu;
