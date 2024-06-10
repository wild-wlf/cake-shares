import React, { useEffect } from 'react';
import UserInfo from '@/components/atoms/Profile/UserInfo';
import Button from '@/components/atoms/Button';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import { StyledProfile } from '../../components/atoms/Profile/Profile.styles';
import sellerImage from '../../_assets/seller-img.png';
import sellerHeroImage from '../../_assets/seller-hero-bg.png';
import SellerPersonalInfo from '@/components/atoms/SellerPersonalInfo';
import Categories from '@/components/atoms/categories';
import SellerProfileBanner from '@/components/atoms/Profile/ProfileBanner/sellerProfileBanner';
import userService from '@/services/userService';
import { useState } from 'react';
import SellerInfo from '@/components/atoms/Profile/UserInfo/SellerInfo';
import Loader from '@/components/atoms/Loader';
import Toast from '@/components/molecules/Toast';

const SellerProfile = ({ userProfileData }) => {
  console.log(userProfileData);
  const router = useRouter();
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function UserProfileData(userProfileData) {
    try {
      setIsLoading(true);
      const res = await userService.getUserProfile(userProfileData);
      setUserProfile(res);
    } catch (error) {
      Toast({
        type: error,
        message: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    UserProfileData(userProfileData);
  }, [userProfileData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledProfile>
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
          <SellerProfileBanner title="Real Estate Broker Things mate!" image={userProfile?.bannerImage} />
          <SellerInfo userInfo={userProfile?.user} />
          <SellerPersonalInfo userInfo={userProfile?.user} />
          <Categories title="Seller’s Other Products" data={userProfile?.otherProducts} />
          <Categories title="Seller’s Fully Funded Products" data={userProfile?.fullyFundedProducts} />
        </StyledProfile>
      )}
    </>
  );
};

export default SellerProfile;

export async function getServerSideProps({ params }) {
  const slug = params?.slug;
  console.log(params?.slug);
  return {
    props: {
      userProfileData: slug,
    },
  };
}
