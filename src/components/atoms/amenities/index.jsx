import React, { useState } from 'react';
import { AmentitiesWrapper, ContainerWrapper } from './amenities.style';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'next/image';
import MessageIcon from '../../../_assets/chat-icon.svg';
import CenterModal from '../Modal/CenterModal';
import Chat from '../Chat';

const Amenities = ({ data }) => {
  const [chatModal, setChatModal] = useState(false);
  return (
    <>
      <CenterModal open={chatModal} setOpen={setChatModal} title="Community Chat" width="1339">
        <Chat type="Community" />
      </CenterModal>
      <ContainerWrapper>
        <AmentitiesWrapper>
          <div>
            <span>Amenities</span>
          </div>
          <div className="amenities">
            {data?.amenities?.map((data, index) => (
              <div className="amenity" key={index}>
                <span>
                  <IoIosCheckmarkCircle className="icon" />
                  {data}
                </span>
              </div>
            ))}
          </div>
        </AmentitiesWrapper>
        <div
          className="chatWrapper"
          onClick={() => {
            setChatModal(true);
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
