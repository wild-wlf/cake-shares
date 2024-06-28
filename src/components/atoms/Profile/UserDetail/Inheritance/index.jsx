import React, { useState } from 'react';
import { StyledInheritance } from './Inheritance.styles';
import { IoIosAdd } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';
import { MdModeEdit, MdOutlineDeleteForever } from 'react-icons/md';
import ModalContainer from '@/components/atoms/ModalContainer';
import EditProfile from '../EditBank/EditProfile';
import DeleteInheritance from '../EditBank/DeleteInheritance';
import notaccess from '../../../../../_assets/notaccess.svg';
import confirmIcon from '../../../../../_assets/confirmIcon.svg';
import Image from 'next/image';
import CenterModal from '@/components/atoms/Modal/CenterModal';
import ConfirmationModal from '../EditBank/ConfirmationModal';
import AddInheritance from '../EditBank/AddInheritance';
import EditInheritance from '../EditBank/EditInheritance';
const Inheritance = ({ userData }) => {
  const inheritanceData = [
    {
      name: 'Logan Paulson',
      accNo: '12345',
      country: 'United States',
    },
    {
      name: 'Logan Paulson',
      accNo: '123456123564262854',
      country: 'United States',
    },
    {
      name: 'Logan Paulson',
      accNo: '123456123564262854',
      country: 'United States',
    },
    {
      name: 'Logan Paulson',
      accNo: '123456123564262854',
      country: 'United States',
    },
  ];
  const [successModal, setSuccessModal] = useState(false);
  return (
    <>
      <CenterModal
        open={successModal}
        setOpen={setSuccessModal}
        width={543}
        title={
          <>
            <Image src={confirmIcon} alt="confirmIcon" />
          </>
        }>
        <ConfirmationModal />
      </CenterModal>

      <StyledInheritance>
        <div className="head">
          <span className="heading">My Inheritance</span>
          <ModalContainer
            lg
            width={668}
            overflow="hidden"
            title="Add Inheritance"
            btnComponent={({ onClick }) => (
              <div className="add-new" onClick={onClick}>
                <IoIosAdd />
                <span>Add New</span>
              </div>
            )}
            content={({ onClose }) => <AddInheritance onClose={onClose} />}
          />
        </div>
        <div className="col-holder">
          {userData?.inheritances?.map((elem, ind) => (
            <div className="col" key={ind}>
              <div className="user-col">
                <div className="img-holder">
                  <IoPerson />
                </div>
                <div>
                  <span className="name">{elem.name}</span>
                  <span className="text">{elem.passportNumber}</span>
                </div>
              </div>
              <div className="user-edit-del">
                <div className="edit-del-wrapper">
                  <ModalContainer
                    lg
                    width={673}
                    overflow={'hidden'}
                    title="Edit  Inheritance"
                    btnComponent={({ onClick }) => (
                      <div className="edit" onClick={onClick}>
                        <MdModeEdit />
                      </div>
                    )}
                    content={({ onClose }) => (
                      <EditInheritance onClose={onClose} selectedItem={elem} userData={userData} />
                    )}
                  />
                  <ModalContainer
                    lg
                    width={543}
                    title={
                      <>
                        <Image src={notaccess} alt="notaccess" />
                      </>
                    }
                    btnComponent={({ onClick }) => (
                      <div className="delete" onClick={onClick}>
                        <MdOutlineDeleteForever />
                      </div>
                    )}
                    content={({ onClose }) => <DeleteInheritance onClose={onClose} setSuccessModal={setSuccessModal} />}
                  />
                </div>
                <span className="text country">{elem.country}</span>
              </div>
            </div>
          ))}
        </div>
      </StyledInheritance>
    </>
  );
};

export default Inheritance;
