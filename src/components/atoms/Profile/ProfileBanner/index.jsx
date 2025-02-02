import React, { useState } from 'react';
import { StyledProfileBanner } from './ProfileBanner.styles';
import editIcon from '../../../../_assets/editIcon.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import userService from '@/services/userService';
import { convertToFormData } from '@/helpers/common';
import Toast from '@/components/molecules/Toast';

const ProfileBanner = ({ title = 'Cakeshares', type = 'Buyer' }) => {
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  const [bannerImg, setBannerImg] = useState(null);
  const [loading, setloading] = useState(false);

  const router = usePathname();
  async function handleBannerImg(e, accept) {
    setloading(true);
    const file = e.target.files[0];

    const acceptableExtensions = accept.split(',').map(ext => ext.trim());
    if (!acceptableExtensions?.includes(file?.type)) {
      const extensions = acceptableExtensions
        .map(ext => ext.split('/')[1].toUpperCase())
        .join(', ')
        .replace(/,(?=[^,]*$)/, ' and');

      Toast({
        type: 'error',
        message: `Image Must be in ${extensions} format!`,
      });
      return;
    }

    const fileLength = file.size / (1024 * 1024);
    if (fileLength > 1) {
      Toast({
        type: 'error', message: "File size exceeded! Please upload a file having size upto 1MB."
      })
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        setBannerImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
    let obj = {
      type: 'picture',
      bannerImage: file,
    };
    const data = convertToFormData(obj);
    try {
      await userService.uploadMedia(data, user._id);
      Toast({
        type: 'success',
        message: 'Banner updated successfully',
      });
      setPermission(true);
      setloading(false);
    } catch (error) {
      setloading(false);
      Toast({
        type: 'error',
        message: error.message,
      });
    }
  }
  return (
    <>
      <StyledProfileBanner $image={user?.bannerImage} $loading={loading}>
        <strong className="title">{title}</strong>
        {router === '/profile' && (
          <button type="button">
            <input type="file" id="bannerImg" accept="image/jpeg, image/jpg, image/png" onChange={e => handleBannerImg(e, 'image/jpeg, image/jpg, image/png')} />
            <label htmlFor="bannerImg">
              <span className="rounded-icon">
                <Image src={editIcon} alt="editIcon" />
              </span>
              Change Cover Banner
            </label>
          </button>
        )}
      </StyledProfileBanner>
    </>
  );
};

export default ProfileBanner;
