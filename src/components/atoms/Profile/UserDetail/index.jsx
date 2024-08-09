/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react';
import { StyledUserDetail } from './UserDetail.styles';
import Button from '../../Button';
import { MdModeEdit } from 'react-icons/md';
import bankIcon from '../../../../_assets/bankIcon.svg';
import numIcon from '../../../../_assets/numIcon.svg';
import userIcon from '../../../../_assets/userIcon.svg';
import userId from '../../../../_assets/userId.svg';
import userName from '../../../../_assets/userName.svg';
import emailAddress from '../../../../_assets/emailAddress.svg';
import password from '../../../../_assets/password.svg';
import flagIcon from '../../../../_assets/flagIcon.svg';
import dltIcon from '../../../../_assets/dltIcon.svg';
import accDelete from '../../../../_assets/accDelete.svg';
import Image from 'next/image';
import Inheritance from './Inheritance';
import TableLayout from '../../TableLayout';
import Table from '@/components/molecules/Table';
import ModalContainer from '../../ModalContainer';
import EditBank from './EditBank';
import EditProfile from './EditBank/EditProfile';
import { countries } from '@/components/Constant';
import CommunityChat from '@/components/atoms/Chat/CommunityChat';

const UserDetail = ({ userData, assetsData, assets_loading, searchQuery, setSearchQuery }) => {
  const fromatDate = value => {
    const date = new Date(value);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed in JavaScript
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const bankInfo = {
    bankId: userData?.bank?._id,
    bankName: userData?.bank?.bankName,
    iban: userData?.bank?.iban,
    swiftBicNumber: userData?.bank?.swiftBicNumber,
    userId: userData?.bank?.userId,
  };
  const personalInfo = {
    Id: userData._id,
    fullName: userData?.fullName,
    username: userData?.username,
    email: userData?.email,
    country: userData?.country,
    countryLabel: countries.find(elem => elem.value === userData?.country)?.label,
    dob: fromatDate(userData?.dob),
  };

  const actionBtns = asset => (
    <ModalContainer
      lg
      width={1339}
      title="Investor's Chat"
      btnComponent={({ onClick }) => (
        <Button type="primary" rounded sm onClick={onClick}>
          Chat
        </Button>
      )}
      content={({ onClose }) => (
        <CommunityChat
          onClose={onClose}
          type="stake"
          userInfo={asset?.user}
          productName={asset?.product?.productName}
          productId={asset?.product?._id}
        />
      )}
    />
  );

  const { report_rows, totalItems } = useMemo(
    () => ({
      report_rows: assetsData?.items?.map(report => [
        report?.product?.productName,
        report?.category?.name,
        report?.totalShares ?? 0,
        report?.totalAmount ?? 0,

        actionBtns(report),
      ]),
      totalItems: assetsData?.totalItems,
    }),
    [assetsData],
  );
  const columnNames = [`Product`, `Category`, `Total Shares`, `Amount`, `Chat (Investors)`];
  return (
    <StyledUserDetail>
      <div className="colWrapper">
        <div className="colHeader">
          <strong className="colTitle">Bank Info:</strong>
          <ModalContainer
            lg
            width={673}
            title="Edit Bank Info"
            btnComponent={({ onClick }) => (
              <Button btntype="primary" rounded sm onClick={onClick}>
                <MdModeEdit />
                Edit Info
              </Button>
            )}
            content={({ onClose }) => <EditBank onClose={onClose} bankInfo={bankInfo} />}
          />
        </div>
        <div className="colBody">
          <>
            <div className="col-content">
              <div className="iconWrap">
                <Image src={bankIcon} alt="bankIcon" />
              </div>
              <div className="textWrap">
                <strong className="title">Bank Name</strong>
                <span>{bankInfo?.bankName}</span>
              </div>
            </div>
            <div className="col-content">
              <div className="iconWrap">
                <Image src={numIcon} alt="bankIcon" />
              </div>
              <div className="textWrap">
                <strong className="title">IBAN</strong>
                <span>{bankInfo?.iban}</span>
              </div>
            </div>
            <div className="col-content">
              <div className="iconWrap">
                <Image src={userIcon} alt="bankIcon" />
              </div>
              <div className="textWrap">
                <strong className="title">SWIFT / BIC Number</strong>
                <span>{bankInfo?.swiftBicNumber}</span>
              </div>
            </div>
            <div className="col-content">
              <div className="iconWrap">
                <Image src={userId} alt="bankIcon" />
              </div>
              <div className="textWrap">
                <strong className="title">User ID</strong>
                <span>{bankInfo?.userId}</span>
              </div>
            </div>
          </>
        </div>
      </div>
      <Inheritance userData={userData} />
      <div className="colWrapper">
        <div className="colHeader">
          <strong className="colTitle">Personal info:</strong>
          <ModalContainer
            lg
            width={673}
            title="Edit Profile"
            btnComponent={({ onClick }) => (
              <Button type="primary" rounded sm onClick={onClick}>
                <MdModeEdit />
                Edit Profile
              </Button>
            )}
            content={({ onClose }) => <EditProfile onClose={onClose} personalInfo={personalInfo} />}
          />
        </div>
        <div className="colBody">
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userIcon} alt="userIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Full Name</strong>
              <span>{personalInfo?.fullName}</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userName} alt="userName" />
            </div>
            <div className="textWrap">
              <strong className="title">Username</strong>
              <span>{personalInfo?.username}</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={emailAddress} alt="emailAddress" />
            </div>
            <div className="textWrap">
              <strong className="title">Email Address</strong>
              <span>{personalInfo?.email}</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={password} alt="password" />
            </div>
            <div className="textWrap">
              <strong className="title">Password</strong>
              <span>**************</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={flagIcon} alt="flagIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Country</strong>
              <div className="discreptionWrap">
                <figure className="flagicon">
                  <Image
                    src={`https://countryflagsapi.netlify.app/flag/${personalInfo?.country}.svg`}
                    alt="countryflgIcon"
                    width={18}
                    height={18}
                  />
                </figure>
                <span>{personalInfo.countryLabel}</span>
              </div>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={password} alt="password" />
            </div>
            <div className="textWrap">
              <strong className="title">Date of Birth</strong>
              <span>{personalInfo.dob}</span>
            </div>
          </div>
          <div className="col-content danger">
            <div className="iconWrap">
              <Image src={dltIcon} alt="dltIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Account Deactivation</strong>
              <div className="discreptionWrap">
                <span>Deactivate Account</span>
                <Image src={accDelete} alt="accDelete" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colWrapper">
        <TableLayout
          ReportsFilters
          tableHeading="My Assets:"
          currentPage={searchQuery.page}
          pageSize={searchQuery.pageSize}
          totalCount={totalItems}
          onChangeFilters={filters => {
            setSearchQuery(_ => ({
              ..._,
              ...filters,
            }));
          }}>
          <Table rowsData={report_rows} loading={assets_loading} columnNames={columnNames} noPadding />
        </TableLayout>
      </div>
    </StyledUserDetail>
  );
};

export default UserDetail;
