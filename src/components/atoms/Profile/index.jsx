/* eslint-disable react/jsx-key */
import React from "react";
import { StyledProfile } from "./Profile.styles";
import Button from "../Button";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import ProfileBanner from "./ProfileBanner";
import UserInfo from "./UserInfo";
import UserDetail from "./UserDetail";
import UserImage from "../../../_assets/userProfile.png";
import bgImage from "../../../_assets/banerImage.jpg";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/components/Context/authContext";

const Profile = () => {
  const router = useRouter();
  const { user } = useContextHook(AuthContext, (v) => ({
    user: v.user,
  }));
  return (
    <StyledProfile>
      <div className="previousButton">
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
      </div>
      <ProfileBanner image={user.bannerImage || bgImage} />
      <UserInfo userImage={user?.profilePicture} userData={user} />
      <UserDetail userData={user} />
    </StyledProfile>
  );
};

export default Profile;
