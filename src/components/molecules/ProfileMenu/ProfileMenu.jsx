import React, { useContext } from 'react';
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
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';

const ProfileMenu = ({ openProfile }) => {
  const router = useRouter();
  const { privacyPolicy, setPrivacyPolicy, privacySetting, setPrivacySetting, termsCondition, setTermsCondition } =
    useContext(UserContext);
  const { onLogout, user } = useContextHook(AuthContext, v => ({
    onLogout: v.onLogout,
    user: v.user,
  }));
  return (
    <>
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
          {/* <Link href="/profile" passHref> */}
          <div onClick={() => router.push('/profile')} className="DarkTheme">
            <Image src={myProfileIcon} alt="My profile" width={17} height={17} />
            <h5>My Profile</h5>
          </div>
          {/* </Link> */}

          <div
            className="DarkTheme"
            onClick={() => {
              setPrivacyPolicy(!privacyPolicy);
            }}>
            <Image src={privacyPolicyIcon} alt="Privacy Policies" width={17} height={17} />
            <h5>Privacy Policy</h5>
          </div>
          {/* <div
            className="DarkTheme"
            onClick={() => {
              setPrivacySetting(true);
            }}>
            <Image src={privacySettingIcon} alt="Privacy Settings" width={17} height={17} />
            <h5>Privacy Settings</h5>
          </div>
           */}
          <div
            onClick={() => {
              setTermsCondition(!termsCondition);
            }}>
            <div className="DarkTheme" style={{ paddingBottom: '14px' }}>
              <Image src={termsIcon} alt="Terms & Conditions" width={17} height={17} />
              <h5>Terms & Conditions</h5>
            </div>
          </div>
          {/* <hr /> */}
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
