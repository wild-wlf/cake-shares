import React, { useState } from 'react';
import { AmentitiesWrapper, ContainerWrapper } from './amenities.style';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'next/image';
import MessageIcon from '../../../_assets/chat-icon.svg';
import CenterModal from '../Modal/CenterModal';
import CommunityChat from '../Chat/CommunityChat';
import Skeletonn from '../skeleton/Skeletonn';
import { NoRecord } from '../categories/categories.style';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Toast from '@/components/molecules/Toast';
import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa';

const Amenities = ({ data, loading }) => {
  const [chatModal, setChatModal] = useState(false);
  const { isLoggedIn } = useContextHook(AuthContext, v => ({
    isLoggedIn: v.isLoggedIn,
  }));

  function getFileNameIfPdf(url) {
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const extension = fileName.split('.').pop();

    if (extension === 'pdf') {
      return fileName;
    }
    return null;
  }

  return (
    <>
      <CenterModal open={chatModal} setOpen={setChatModal} title="Community Chat" width="1339">
        <CommunityChat type="community" userInfo={data?.userId} productName={data?.productName} productId={data?._id} />
      </CenterModal>
      <ContainerWrapper>
        <AmentitiesWrapper>
          <div className="amenities-holder">
            <span>Amenities</span>
            <div className="amenities">
              {loading ? (
                Array.from({ length: 5 }).map((_, ind) => (
                  <div className="amenity" key={ind}>
                    <Skeletonn height="20" radius="12px" width="70" resp />
                  </div>
                ))
              ) : data?.amenities?.length ? (
                data?.amenities?.map((data, index) => (
                  <div className="amenity" key={index}>
                    <span>
                      <IoIosCheckmarkCircle className="icon" />
                      {data}
                    </span>
                  </div>
                ))
              ) : (
                <NoRecord>No records found</NoRecord>
              )}
            </div>
          </div>

          <div className="amenities-holder">
            <span>Additional Documents: </span>
            <div className="amenities">
              {data?.media?.slice(3).map((data, index) => (
                <div className="additional-document" key={index}>
                  <FaFilePdf color="var(--danger-dark)" size={20} />
                  <Link href={data} download target="_blank">
                    {getFileNameIfPdf(data)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </AmentitiesWrapper>
        <div
          className="chatWrapper"
          onClick={() => {
            if (isLoggedIn) {
              setChatModal(true);
            } else {
              Toast({ type: 'error', message: 'Kindly Login To Continue' });
            }
          }}>
          <div>
            <Image src={MessageIcon} alt="chatIcon" width={19.26} height={19.26} />
          </div>
          <h6>
            Have a question?
            <br /> Click here to chat.
          </h6>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Amenities;
