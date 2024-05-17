import React, { useContext, useEffect, useRef, useState } from "react";
import Notifications from "../components/molecules/Notifications";
import { NavLinks, StyledTopBar } from "./TopBar.styles";
import logo from "../_assets/logo.svg";
import Image from "next/image";
import bell from "../_assets/bell.svg";
import bellWhite from "../_assets/bell-white.svg";
import Button from "@/components/atoms/Button";
import register from "../_assets/register.svg";
import { HiMenuAlt1, HiOutlineMenuAlt1 } from "react-icons/hi";
import RegisterModal from "../components/atoms/registerModal";
import CenterModal from "@/components/atoms/Modal/CenterModal";
import RegisterAsBuyer from "@/components/atoms/registerAsBuyer";
import CreatePasswordModal from "@/components/atoms/createPasswordModal";
import CompleteRegistrationModal from "@/components/atoms/completeRegistrationModal";
import LoginAsBuyerModal from "@/components/atoms/loginAsBuyerModal";
import KycBuyerLevelOne from "@/components/atoms/KYC/KYCBuyer";
import { KycContext } from "@/components/Context/KycContext";
import KycBuyerLevelTwo from "@/components/atoms/KYC/KYCBuyerTwo";
import KYCBuyerThree from "@/components/atoms/KYC/KYCBuyerThree";
import ProfileMenu from "@/components/molecules/ProfileMenu/ProfileMenu";
import { MdArrowDropDown, MdStorefront } from "react-icons/md";
import profile from "../_assets/profile.png";
import KycLevel from "@/components/atoms/KYC/KycLevel";
import line from "../_assets/sidenav-line.svg";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { UserContext } from "@/components/Context/UserContext";

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    registermodal,
    setRegisterModal,
    buyermodal,
    setBuyerModal,
    passwordModal,
    setPasswordModal,
    completeRegistrationModal,
    setCompleteRegistrationModal,
    setBuyerDetails,
  } = useContext(UserContext);

  const [sideNav, setSideNav] = useState(false);
  const [loginmodal, setLoginModal] = useState(false);
  const [buyerloginmodal, setBuyerLoginModal] = useState(false);
  const [sellerloginmodal, setSellerLoginModal] = useState(false);
  const [sellerregistermodal, setSellerRegisterModal] = useState(false);
  const [sellerpasswordModal, setSellerPasswordModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const ProfileRef = useRef(null);

  const router = usePathname();
  const navigate = useRouter();
  const handleClickOutsideProfile = (event) => {
    if (ProfileRef.current && !ProfileRef.current.contains(event.target)) {
      setOpenProfile(false);
    }
  };
  const handleRegisterModal = () => {
    setRegisterModal(false);
    setBuyerModal(true);
  };
  const handleSellerModal = () => {
    setLoginModal(false);
    setSellerLoginModal(true);
  };
  const handleBuyerModal = () => {
    setBuyerModal(false);
    setPasswordModal(true);
    setBuyerDetails({
      type: "Buyer",
    });
    console.log("first");
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
  const handleSellerLoginModal = () => {
    setRegisterModal(false);
    setSellerRegisterModal(true);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideProfile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfile);
    };
  }, []);
  useEffect(() => {
    if (sideNav) {
      document.body.classList.add("active-nav");
    } else {
      document.body.classList.remove("active-nav");
    }
  }, [sideNav]);

  const { kycLevel, setKycLevel, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3 } =
    useContext(KycContext);

  return (
    <>
      {/* KYC MODAL */}
      <CenterModal
        zIndex={9999}
        open={kyc1}
        setOpen={setKyc1}
        width="688"
        title="Upgrade to KYC Level 1"
      >
        <KycBuyerLevelOne setKycLevel={setKycLevel} setOpen={setKyc1} />
      </CenterModal>
      <CenterModal
        zIndex={9999}
        open={kyc2}
        setOpen={setKyc2}
        width="688"
        title="Upgrade to KYC Level 2"
      >
        <KycBuyerLevelTwo setKycLevel={setKycLevel} setOpen={setKyc2} />
      </CenterModal>
      <CenterModal
        zIndex={9999}
        open={kyc3}
        setOpen={setKyc3}
        width="688"
        title="Upgrade to KYC Level 3"
      >
        <KYCBuyerThree setKycLevel={setKycLevel} setOpen={setKyc3} />
      </CenterModal>
      {/* KYC MODAL */}
      {/* Registration Modals */}
      <CenterModal
        open={registermodal}
        setOpen={setRegisterModal}
        title={"Register an Account!"}
        width="646"
      >
        <RegisterModal
          handleRegisterModal={handleRegisterModal}
          handleSellerModal={handleSellerLoginModal}
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
      <CenterModal
        open={sellerregistermodal}
        setOpen={setSellerRegisterModal}
        title="Register As a Seller"
        width="666"
      >
        <LoginAsBuyerModal
          handleSellerRegisterModal={() => {
            setSellerRegisterModal(false);
            setSellerPasswordModal(true);
          }}
          type="Register As Seller"
        />
      </CenterModal>
      <CenterModal
        open={sellerpasswordModal}
        setOpen={setSellerPasswordModal}
        title="Register As a Seller"
        width="666"
      >
        <CreatePasswordModal
          type="Register As Seller"
          handleSellerPasswordModal={() => {
            setSellerPasswordModal(false);
          }}
        />
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
        <LoginAsBuyerModal
          type={"Login As Buyer"}
          handleLoginModal={() => setBuyerLoginModal(false)}
        />
      </CenterModal>
      <CenterModal
        open={sellerloginmodal}
        setOpen={setSellerLoginModal}
        title="Login As a Seller"
        width="666"
      >
        <LoginAsBuyerModal
          handleRegisterModal={() => {
            setRegisterModal(true);
            setSellerLoginModal(false);
          }}
          handleSellerLoginModal={(e) => setSellerLoginModal(false)}
          type="Login As Seller"
        />
      </CenterModal>
      <StyledTopBar>
        <div className="logoWrapper">
          <div className="layer" onClick={() => setSideNav(false)} />
          <div className="closedNav" onClick={() => setSideNav(true)}>
            <HiOutlineMenuAlt1 />
          </div>
          <NavLinks $active={sideNav}>
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
            <div className="profile">
              <Image src={line} alt="line" />
              <div className="profile-details">
                <Image src={profile} width={40} height={40} alt="profile" />
                <div className="user-details">
                  <span>Guest Mode</span>
                  <span className="sub">Guest Mode</span>
                </div>
              </div>
              <Image src={line} alt="line" />
            </div>
            <Link
              href="/"
              className={
                router === "/" ? "textField textField-home" : "textField"
              }
            >
              <MdStorefront />
              <span>Marketplace</span>
            </Link>
          </NavLinks>
        </div>

        <div className="actions">
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

          <div
            className="notification"
            onClick={() => {
              setNotifications(!notifications);
            }}
          >
            <Image src={bell} alt="bell" className="bell" />
            <Image src={bellWhite} alt="bell" className="bell-white" />
            <div
              className={
                notifications
                  ? "notificationWrapper-visible"
                  : "notificationWrapper"
              }
            >
              <Notifications />
            </div>
          </div>

          {isLoggedIn ? (
            <>
              <div
                className="wallet"
                onClick={() =>
                  window.open(
                    "https://cake-admin.webevis.com/?type=buyer",
                    "_blank"
                  )
                }
              >
                <FaWallet />
                <span>My Wallet</span>
              </div>
              <div className="buttonWrapper" ref={ProfileRef}>
                <Button
                  rounded
                  sm
                  btntype="light-green"
                  onClick={() => {
                    setOpenProfile(!openProfile);
                  }}
                >
                  <Image src={profile} alt="profile" />
                  Alex
                  <MdArrowDropDown />
                </Button>
                <ProfileMenu setIsLoggedIn={setIsLoggedIn} />
              </div>
            </>
          ) : (
            <div className="authContainer">
              <Button
                type="light-green"
                rounded
                sm
                onClick={() => setRegisterModal(true)}
              >
                <Image src={register} alt="register" />
                Register
              </Button>
              <Button
                rounded
                sm
                btntype="white-blue"
                onClick={() => {
                  setLoginModal(true);
                  setIsLoggedIn(true);
                  // navigate.push({
                  //   pathname: "http://localhost:3000/",
                  //   query: { type: "seller" },
                  // });
                }}
              >
                Login
              </Button>
            </div>
          )}
        </div>
        <ProfileMenu openProfile={openProfile} setIsLoggedIn={setIsLoggedIn} />
      </StyledTopBar>
    </>
  );
};

export default TopBar;
