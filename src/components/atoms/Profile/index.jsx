/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { StyledProfile } from './Profile.styles';
import Button from '../Button';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';
import ProfileBanner from './ProfileBanner';
import UserInfo from './UserInfo';
import UserDetail from './UserDetail';
import UserImage from '../../../_assets/userProfile.png';
import bgImage from '../../../_assets/banerImage.jpg';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import productService from '@/services/productService';

const Profile = () => {
  const { fetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
  }));
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 4,
    searchText: '',
    getAll: '',
  });
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

  const { assets_data, assets_loading } = productService.GetMyAssets(searchQuery, fetch);

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
          }}>
          <IoIosArrowBack />
          Go Back
        </Button>
      </div>
      <ProfileBanner image={user.bannerImage || bgImage} />
      <UserInfo userImage={user?.profilePicture} userData={user} categoriesData={assets_data?.assets?.myCategories} />
      <UserDetail
        userData={user}
        assetsData={assets_data?.assets}
        assets_loading={assets_loading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </StyledProfile>
  );
};

export default Profile;
