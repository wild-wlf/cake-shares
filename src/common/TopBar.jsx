import React, { useContext, useState } from "react";
import Notifications from "../components/molecules/Notifications";
import { StyledTopBar } from "./TopBar.styles";
import logo from "../_assets/logo.svg";
import Image from "next/image";
import bell from "../_assets/bell.svg";
import bellWhite from "../_assets/bell-white.svg";
import Button from "@/components/atoms/Button";
import register from "../_assets/register.svg";
import store from "../_assets/store.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import SideNav from "../components/atoms/sideNav/index.js";
import RegisterModal from "../components/atoms/registerModal";
import CenterModal from "@/components/atoms/Modal/CenterModal";
import AdvanceSearch from "../components/atoms/advanceSearch";
import InheritenceAddedModal from "@/components/atoms/inheritanceaddedmodal";
import GreenTick from "../_assets/Green-Tick.svg";
import RegisterAsBuyer from "@/components/atoms/registerAsBuyer";
import CreatePasswordModal from "@/components/atoms/createPasswordModal";
import CompleteRegistrationModal from "@/components/atoms/completeRegistrationModal";
import LoginAsBuyerModal from "@/components/atoms/loginAsBuyerModal";
import KycBuyerLevelOne from "@/components/atoms/KYC/KYCBuyer";
import { KycContext } from "@/components/Context/KycContext";
import KycBuyerLevelTwo from "@/components/atoms/KYC/KYCBuyerTwo";
import KYCBuyerThree from "@/components/atoms/KYC/KYCBuyerThree";
import ProfileMenu from "@/components/molecules/ProfileMenu/ProfileMenu";
import { MdArrowDropDown } from "react-icons/md";
import profile from "../_assets/profile.png";
import KycLevel from "@/components/atoms/KYC/KycLevel";

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [openSideNav, setOpenSidenav] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [registermodal, setRegisterModal] = useState(false);
  const [loginmodal, setLoginModal] = useState(false);
  const [buyermodal, setBuyerModal] = useState(false);
  const [buyerloginmodal, setBuyerLoginModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const [completeRegistrationModal, setCompleteRegistrationModal] =
    useState(false);

  const handleRegisterModal = () => {
    setRegisterModal(false);
    setBuyerModal(true);
  };
  const handleSellerModal = () => {
    console.log("running");
  };
  const handleBuyerModal = () => {
    setBuyerModal(false);
    setPasswordModal(true);
  };

  const createPasswordModal = () => {
    setPasswordModal(false);
  };
  const handleCompleteRegistration = () => {
    setPasswordModal(false);
    setCompleteRegistrationModal(true);
  };

  const handleRegistration = () => {
    setCompleteRegistrationModal(false);
  };

  const handleLoginModal = () => {
    setLoginModal(false);
    setBuyerLoginModal(true);
  };
  const { kycLevel, setKycLevel, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3 } =
    useContext(KycContext);
  return (
    <>
      {/* KYC MODAL */}
      <CenterModal
        open={kyc1}
        setOpen={setKyc1}
        width="688"
        title="Upgrade to KYC Level 1"
      >
        <KycBuyerLevelOne setKycLevel={setKycLevel} setOpen={setKyc1} />
      </CenterModal>
      <CenterModal
        open={kyc2}
        setOpen={setKyc2}
        width="688"
        title="Upgrade to KYC Level 2"
      >
        <KycBuyerLevelTwo setKycLevel={setKycLevel} setOpen={setKyc2} />
      </CenterModal>
      <CenterModal
        open={kyc3}
        setOpen={setKyc3}
        width="688"
        title="Upgrade to KYC Level 3"
      >
        <KYCBuyerThree setKycLevel={setKycLevel} setOpen={setKyc3} />
      </CenterModal>
      {/* KYC MODAL
      {/* Registration Modals */}
      <CenterModal
        open={registermodal}
        setOpen={setRegisterModal}
        title={"Register an Account!"}
        width="646"
      >
        <RegisterModal
          handleRegisterModal={handleRegisterModal}
          handleSellerModal={handleSellerModal}
          type="Register"
          description="Select Account Type"
        />
      </CenterModal>
      <CenterModal
        open={buyermodal}
        setOpen={setBuyerModal}
        title="Register As a Buyer"
        width="666"
      >
        <RegisterAsBuyer handleBuyerModal={handleBuyerModal} />
      </CenterModal>
      <CenterModal
        open={passwordModal}
        setOpen={setPasswordModal}
        title="Register As a Buyer"
        width="666"
      >
        <CreatePasswordModal
          createPasswordModal={createPasswordModal}
          handleCompleteRegistration={handleCompleteRegistration}
        />
      </CenterModal>
      <CenterModal
        open={completeRegistrationModal}
        setOpen={setCompleteRegistrationModal}
        title="Complete Registration"
        width="804"
      >
        <CompleteRegistrationModal handleRegistration={handleRegistration} />
      </CenterModal>
      {/* Login Modals */}
      <CenterModal
        open={loginmodal}
        setOpen={setLoginModal}
        title={"Cakeshare Login"}
        width="622"
      >
        <RegisterModal
          handleRegisterModal={handleLoginModal}
          handleSellerModal={handleSellerModal}
          type="Login"
          description="Welcome to cakeshares, please select the account type to proceed."
        />
      </CenterModal>
      <CenterModal
        open={buyerloginmodal}
        setOpen={setBuyerLoginModal}
        title="Login As a Buyer"
        width="666"
      >
        <LoginAsBuyerModal handleLoginModal={() => setBuyerLoginModal(false)} />
      </CenterModal>
      <StyledTopBar>
        <div className="logoWrapper">
          <div className="closedNav" onClick={() => setOpenSidenav(true)}>
            <HiMenuAlt1 className="Icon" />
          </div>
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>

          <div className="textField">
            <Image src={store} alt="Marketplace" />
            <span>Marketplace</span>
          </div>
        </div>

        <div className="actions" style={{ display: "Flex", gap: "10px" }}>
          {isLoggedIn ? (
            <>
              <div className="textfeildWrapper">
                <div className="textFieldRight">
                  <span className="heading">My Kyc Level</span>
                  <span>{kycLevel - 1}</span>
                </div>
                <KycLevel level={kycLevel} bg />
              </div>
            </>
          ) : (
            ""
          )}

          <div className="notification">
            <Image src={bell} alt="bell" />
            <div className="notificationWrapper">
              <Notifications />
            </div>
          </div>

          {isLoggedIn ? (
            <>
              <div className="wallet">
                {/* <Image src={wallet} alt="wallet" /> */}
                <span>My Wallet</span>
                <div className="walletWrapper">{/* <Notifications /> */}</div>
              </div>
              <div className="buttonWrapper">
                <Button
                  rounded
                  sm
                  btntype="new"
                  onClick={() => {
                    setOpenProfile(!openProfile);
                  }}
                >
                  <Image src={profile} alt="profile" />
                  Alex
                  <MdArrowDropDown />
                </Button>
              </div>
            </>
          ) : (
            <div className="authContainer">
              <Button
                type="new"
                rounded
                sm
                btntype="new"
                onClick={() => setRegisterModal(true)}
              >
                <Image src={register} alt="register" />
                Register
              </Button>
              <Button
                rounded
                sm
                btntype="download"
                onClick={() => {
                  setLoginModal(true);
                  setIsLoggedIn(true);
                }}
              >
                Login
              </Button>
            </div>
          )}
        </div>

        <ProfileMenu openProfile={openProfile} />
        <SideNav openSideNav={openSideNav} />
      </StyledTopBar>
    </>
  );
};

export default TopBar;
