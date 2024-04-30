/* eslint-disable react/jsx-key */
import React from "react";
import { StyledProfile } from "./Profile.styles";
import Button from "../Button";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import ProfileBanner from "./ProfileBanner";
import UserInfo from "./UserInfo";
import UserDetail from "./UserDetail";

const Profile = () => {
  const router = useRouter();
  return (
    <StyledProfile>
      <Button
        rounded
        sm
        btntype="blue"
        className="button"
        onClick={() => {
          router.back();
        }}
      >
        <IoIosArrowBack />
        Go Back
      </Button>
      {/* <ProfileBanner />
      <UserInfo /> */}
      <UserDetail />
    </StyledProfile>
  );
};

export default Profile;
