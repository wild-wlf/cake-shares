import React from "react";
import { ProfileSec } from "./ProfileMenu.Style";
import profileImg from "../../../_assets/userProfile.png";
import LogOut from "../../../_assets/logoutIcon.png";
import myProfileIcon from "../../../_assets/myProfileIcon.png";
import privacyPolicyIcon from "../../../_assets/privacyPolicyIcon.png";
import privacySettingIcon from "../../../_assets/privacySettingIcon.png";
import termsIcon from "../../../_assets/termsIcon.png";
import Image from "next/image";
import Link from "next/link";

const ProfileMenu = ({ openProfile }) => {
  return (
    <>
      <ProfileSec show={openProfile}>
        <div className="top">
          <div className="Dp">
            <Image
              src={profileImg}
              alt="Profile Picture"
              className="Profile-Picture"
            />
          </div>
          <div className="Edit">
            <h3>Alex</h3>
            <h4>Buyer Account</h4>
          </div>
        </div>

        <hr />
        <div className="Dets">
          <Link href="/profile">
            <div className="DarkTheme">
              <Image
                src={myProfileIcon}
                alt="My profile"
                width={17}
                height={17}
              />
              <h5>My Profile</h5>
            </div>
          </Link>
          <div className="DarkTheme">
            <Image
              src={privacyPolicyIcon}
              alt="Privacy Policies"
              width={17}
              height={17}
            />
            <h5>Privacy Policy</h5>
          </div>
          <div className="DarkTheme">
            <Image
              src={privacySettingIcon}
              alt="Privacy Settings"
              width={17}
              height={17}
            />
            <h5>Privacy Settings</h5>
          </div>
          <div className="DarkTheme" style={{ paddingBottom: "14px" }}>
            <Image
              src={termsIcon}
              alt="Terms & Conditions"
              width={17}
              height={17}
            />
            <h5>Terms & Conditions</h5>
          </div>
          <hr />
          <div className="LogOut">
            <Image
              className="Logo"
              width={20}
              height={20}
              src={LogOut}
              alt="Settings"
            />
            <h5>Logout</h5>
          </div>
        </div>
      </ProfileSec>
    </>
  );
};

export default ProfileMenu;