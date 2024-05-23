/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { StyledUserDetail } from "./UserDetail.styles";
import Button from "../../Button";
import { MdModeEdit } from "react-icons/md";
import bankIcon from "../../../../_assets/bankIcon.svg";
import numIcon from "../../../../_assets/numIcon.svg";
import userIcon from "../../../../_assets/userIcon.svg";
import userId from "../../../../_assets/userId.svg";
import userName from "../../../../_assets/userName.svg";
import emailAddress from "../../../../_assets/emailAddress.svg";
import password from "../../../../_assets/password.svg";
import flagIcon from "../../../../_assets/flagIcon.svg";
import countryflgIcon from "../../../../_assets/countryflgIcon.svg";
import dltIcon from "../../../../_assets/dltIcon.svg";
import accDelete from "../../../../_assets/accDelete.svg";
import Image from "next/image";
import Inheritance from "./Inheritance";
import TableLayout from "../../TableLayout";
import Table from "@/components/molecules/Table";
import { IoIosArrowBack } from "react-icons/io";
import Field from "../../Field";
import ModalContainer from "../../ModalContainer";
import EditBank from "./EditBank";
import EditProfile from "./EditBank/EditProfile";
import { countries } from "@/components/Constant";

const UserDetail = ({ userData }) => {
  const fromatDate = (value) => {
    const date = new Date(value);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed in JavaScript
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
    countryLabel: countries.find((elem) => elem.value === userData?.country)
      ?.label,
    dob: fromatDate(userData?.dob),
  };
  console.log(personalInfo.Id);
  const reports_data = [
    {
      product_name: "Gov. Egypt Property",
      category: "Properties",
      total_share: "Sales",
      amount: "$40,256.000",
    },
    {
      product_name: "Audi A8 Car",
      category: "Accessories",
      amount: "$40,256.000",
      total_share: "Refund",
    },
    {
      product_name: "Rolex Watch (GMT-Master II)",
      category: "Properties",
      total_share: "Sales",
      amount: "$40,256.000",
    },
    {
      product_name: "Audi A8 Car",
      category: "Car",
      total_share: "Refund",
      amount: "$40,256.000",
    },
  ];
  const actionBtns = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <button type="button" className="chatButton">
      Chat
    </button>
  );
  const { report_rows, totalItems } = useMemo(
    () => ({
      report_rows: reports_data?.map((report) => [
        report.product_name,
        report.category,
        report.total_share,
        report.amount,

        actionBtns(),
      ]),
      totalItems: reports_data?.length || 0,
    }),
    [reports_data]
  );
  const columnNames = [
    `Product`,
    `Category`,
    `Total Shares`,
    `Amount`,
    `Chat (Stakeholders)`,
  ];

  // const bankInfo = [
  //   {
  //     icon: bankIcon,
  //     title: "Bank Name",
  //     discreption: "Bank of Americe",
  //   },
  //   {
  //     icon: numIcon,
  //     title: "IBAN",
  //     discreption: "PK033310084246213",
  //   },

  //   {
  //     icon: userIcon,
  //     title: "SWIFT / BIC Number",
  //     discreption: "PK033310084246213",
  //   },
  //   {
  //     icon: userId,
  //     title: "User ID",
  //     discreption: "33445554",
  //   },
  // ];
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
            content={({ onClose }) => (
              <EditBank onClose={onClose} bankInfo={bankInfo} />
            )}
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
          <strong className="colTitle">Personal Information:</strong>
          <ModalContainer
            lg
            width={673}
            title="Edit Profile"
            btnComponent={({ onClick }) => (
              <Button type="primary" rounded sm onClick={onClick}>
                <MdModeEdit />
                Edit Info
              </Button>
            )}
            content={({ onClose }) => (
              <EditProfile onClose={onClose} personalInfo={personalInfo} />
            )}
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
          // currentPage={searchQuery.page}
          // pageSize={searchQuery.pageSize}
          totalCount={totalItems}
          onChangeFilters={(filters) => {
            setSearchQuery((_) => ({
              ..._,
              ...filters,
            }));
          }}
        >
          <Table rowsData={report_rows} columnNames={columnNames} noPadding />
        </TableLayout>
      </div>
    </StyledUserDetail>
  );
};

export default UserDetail;
