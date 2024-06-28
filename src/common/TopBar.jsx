import React, { useContext, useEffect, useRef, useState } from 'react';
import Notifications from '../components/molecules/Notifications';
import { NavLinks, StyledTopBar } from './TopBar.styles';
import logo from '../_assets/logo.svg';
import Image from 'next/image';
import bell from '../_assets/bell.svg';
import bellWhite from '../_assets/bell-white.svg';
import profilePlaceHolder from '../_assets/profileplaceHolder.jpg';

import Button from '@/components/atoms/Button';
import register from '../_assets/register.svg';
import { HiMenuAlt1, HiOutlineMenuAlt1 } from 'react-icons/hi';
import RegisterModal from '../components/atoms/registerModal';
import CenterModal from '@/components/atoms/Modal/CenterModal';
import CreatePasswordModal from '@/components/atoms/createPasswordModal';
import CompleteRegistrationModal from '@/components/atoms/completeRegistrationModal';
import KycBuyerLevelOne from '@/components/atoms/KYC/KYCBuyer';
import { KycContext } from '@/context/KycContext';
import KycBuyerLevelTwo from '@/components/atoms/KYC/KYCBuyerTwo';
import KYCBuyerThree from '@/components/atoms/KYC/KYCBuyerThree';
import ProfileMenu from '@/components/molecules/ProfileMenu/ProfileMenu';
import { MdArrowDropDown, MdStorefront } from 'react-icons/md';
import KycLevel from '@/components/atoms/KYC/KycLevel';
import line from '../_assets/sidenav-line.svg';
import { FaWallet } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import userService from '@/services/userService';
import { convertToFormData, setCookie } from '@/helpers/common';
import BuyerLoginSignupModal from '@/components/atoms/buyerloginSignupModal';
import LoginAsSellerModal from '@/components/atoms/LoginAsSellerModal';
import Toast from '@/components/molecules/Toast';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';

const TopBar = () => {
  const {
    registermodal,
    setRegisterModal,
    buyermodal,
    setBuyerModal,
    passwordModal,
    setPasswordModal,
    completeRegistrationModal,
    setCompleteRegistrationModal,
    buyerRegistration,
    setBuyerRegistrationData,
    buyerRegistrationData,
    loginmodal,
    setLoginModal,
  } = useContext(UserContext);
  const { onLogin, loading, isLoggedIn, user } = useContextHook(AuthContext, v => ({
    onLogin: v.onLogin,
    loading: v.loading,
    isLoggedIn: v.isLoggedIn,
    user: v.user,
  }));

  const [sideNav, setSideNav] = useState(false);
  const [buyerloginmodal, setBuyerLoginModal] = useState(false);
  const [sellerloginmodal, setSellerLoginModal] = useState(false);
  const [sellerregistermodal, setSellerRegisterModal] = useState(false);
  const [sellerpasswordModal, setSellerPasswordModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [fetchNotifications, setfetchNotifications] = useState(false);
  const ProfileRef = useRef(null);
  const NotificationRef = useRef(null);
  const [loader, setLoader] = useState(false);

  const router = usePathname();
  const navigate = useRouter();
  const handleClickOutsideProfile = event => {
    if (ProfileRef.current && !ProfileRef.current.contains(event.target)) {
      setOpenProfile(false);
    }
  };
  const handleClickOutsideNotification = event => {
    if (NotificationRef.current && !NotificationRef.current.contains(event.target)) {
      setNotifications(false);
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
  const handleBuyerModal = e => {
    setBuyerModal(false);
    setPasswordModal(true);
    buyerRegistration({
      type: 'Buyer',
      ...e,
    });
  };

  const handleSellerRegisterModal = e => {
    setSellerRegisterModal(false);
    setSellerPasswordModal(true);
    buyerRegistration({
      type: 'Seller',
      ...e,
    });
  };
  const handleSellerPasswordModal = async e => {
    const obj = {
      password: e.password,
      profilePicture: e.profilePicture,
      type: buyerRegistrationData.type,
      username: buyerRegistrationData.username,
      email: buyerRegistrationData.email,
      sellerType: buyerRegistrationData.sellerType,
    };
    const formData = convertToFormData(obj);
    try {
      setLoader(true);
      let response = await userService.createUser(formData);
      if (response.success) {
        setLoader(false);
        Toast({
          type: 'success',
          message: 'User Registered Successfully!',
        });
        setSellerPasswordModal(false);
        setBuyerRegistrationData({});
      } else {
        setLoader(flase);
      }
    } catch (error) {
      setLoader(false);
      Toast({
        type: 'error',
        message: error.message,
      });
    }
    buyerRegistration({
      ...e,
    });
  };
  const handleLoginSellerModal = e => {
    const Login = onLogin(e);
    setSellerLoginModal(false);
  };
  const createPasswordModal = async e => {
    let obj = {
      type: buyerRegistrationData.type,
      password: e,
      email: buyerRegistrationData.email,
      username: buyerRegistrationData.username,
    };
    const formData = convertToFormData(obj);
    try {
      await userService.createUser(formData);
      Toast({
        type: 'success',
        message: 'User Registered Successfully!',
      });
      setPasswordModal(false);
      setBuyerRegistrationData({});
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
    }
  };

  const handleBuyerLogin = async e => {
    const login = onLogin(e);
    setBuyerLoginModal(false);
  };

  const handleCompleteRegistration = e => {
    setPasswordModal(false);
    setCompleteRegistrationModal(true);
    buyerRegistration({ ...e });
  };

  const handleRegistration = e => {
    setBuyerRegistrationData({});
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
    document.addEventListener('mousedown', handleClickOutsideProfile);
    document.addEventListener('mousedown', handleClickOutsideNotification);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideProfile);
      document.removeEventListener('mousedown', handleClickOutsideNotification);
    };
  }, []);
  useEffect(() => {
    //  navigator.vibrate(20000);
    if (sideNav) {
      document.body.classList.add('active-nav');
    } else {
      document.body.classList.remove('active-nav');
    }
  }, [sideNav]);

  useEffect(() => {
    const handleBuyerNotification = () => {
      setfetchNotifications(_ => !_);
    };

    window.addEventListener('buyer_notification', handleBuyerNotification);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('buyer_notification', handleBuyerNotification);
    };
  }, []);

  const { kycLevel, setKycLevel, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3 } = useContext(KycContext);
  return (
    <>
      {/******************************** KYC MODAL ******************************************/}

      <CenterModal zIndex={9999} open={kyc1} setOpen={setKyc1} width="688" title="Upgrade to KYC Level 1">
        <KycBuyerLevelOne setKycLevel={setKycLevel} setOpen={setKyc1} />
      </CenterModal>
      <CenterModal zIndex={9999} open={kyc2} setOpen={setKyc2} width="688" title="Upgrade to KYC Level 2">
        <KycBuyerLevelTwo setKycLevel={setKycLevel} setOpen={setKyc2} />
      </CenterModal>
      <CenterModal zIndex={9999} open={kyc3} setOpen={setKyc3} width="688" title="Upgrade to KYC Level 3">
        <KYCBuyerThree setKycLevel={setKycLevel} setOpen={setKyc3} />
      </CenterModal>
      {/******************************** KYC MODAL ******************************************/}

      {/******************************** Registration Modals ******************************************/}

      <CenterModal open={registermodal} setOpen={setRegisterModal} title={'Register an Account!'} width="646">
        <RegisterModal
          handleRegisterModal={handleRegisterModal}
          handleSellerModal={handleSellerLoginModal}
          type="Register"
          description="Select Account Type"
        />
      </CenterModal>

      <CenterModal open={buyermodal} setOpen={setBuyerModal} title="Register as a Buyer" width="666">
        <BuyerLoginSignupModal handleBuyerModal={handleBuyerModal} type={'Register As Buyer'} />
      </CenterModal>

      <CenterModal open={passwordModal} setOpen={setPasswordModal} title="Register as a Buyer" width="666">
        <CreatePasswordModal
          type={'Register as Buyer'}
          createPasswordModal={createPasswordModal}
          handleCompleteRegistration={handleCompleteRegistration}
          setBuyerModal={setBuyerModal}
          setPasswordModal={setPasswordModal}
        />
      </CenterModal>

      <CenterModal
        open={completeRegistrationModal}
        setOpen={setCompleteRegistrationModal}
        title="Complete Registration"
        width="804">
        <CompleteRegistrationModal
          handleRegistration={handleRegistration}
          setCompleteRegistrationModal={setCompleteRegistrationModal}
          setPasswordModal={setPasswordModal}
        />
      </CenterModal>

      <CenterModal open={sellerregistermodal} setOpen={setSellerRegisterModal} title="Register as a Seller" width="666">
        <LoginAsSellerModal handleSellerRegisterModal={handleSellerRegisterModal} type="Register As Seller" />
      </CenterModal>

      <CenterModal open={sellerpasswordModal} setOpen={setSellerPasswordModal} title="Register as a Seller" width="666">
        <CreatePasswordModal
          type="Register As Seller"
          handleSellerPasswordModal={handleSellerPasswordModal}
          loader={loader}
        />
      </CenterModal>

      {/******************************** Registration Modals ******************************************/}

      {/******************************** Login Modals ******************************************/}

      <CenterModal open={loginmodal} setOpen={setLoginModal} title={'Cakeshare Login'} width="622">
        <RegisterModal
          handleRegisterModal={handleLoginModal}
          handleSellerModal={handleSellerModal}
          type="Login"
          description="Welcome to cakeshares, please select the account type to proceed."
        />
      </CenterModal>
      <CenterModal open={buyerloginmodal} setOpen={setBuyerLoginModal} title="Login as a Buyer" width="666">
        <BuyerLoginSignupModal type="Login As Buyer" handleLoginModal={handleBuyerLogin} />
      </CenterModal>
      <CenterModal open={sellerloginmodal} setOpen={setSellerLoginModal} title="Login as a Seller" width="666">
        <LoginAsSellerModal
          handleRegisterModal={() => {
            setRegisterModal(true);
            setSellerLoginModal(false);
          }}
          handleSellerLoginModal={handleLoginSellerModal}
          type="Login As Seller"
        />
      </CenterModal>

      {/******************************** Login Modals ******************************************/}

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
                <Image
                  src={user?.profilePicture ? user?.profilePicture : profilePlaceHolder}
                  width={40}
                  height={40}
                  alt="profile"
                />
                <div className="user-details">
                  <span>{user?.fullName ? user?.fullName : 'Guest Mode'}</span>
                  <span className="sub">{user?.type ? user?.type : 'Guest Mode'}</span>
                </div>
              </div>
              <Image src={line} alt="line" />
            </div>
            <Link href="/" className={router === '/' ? 'textField textField-home' : 'textField'}>
              <MdStorefront />
              <span>Marketplace</span>
            </Link>
            <div className="kycFieldWrapper">
              <div className="kycField">
                <span className="heading">My Kyc Level</span>
                <span>{user?.kycLevel}</span>
              </div>
              <KycLevel level={user?.kycLevel + 1} bg />
            </div>
          </NavLinks>
        </div>

        <div className="actions">
          {isLoggedIn && (
            <>
              <div className="textfeildWrapper">
                <div className="textFieldRight">
                  <span className="heading">My Kyc Level</span>
                  <span>{user?.kycLevel}</span>
                </div>
                <KycLevel level={user?.kycLevel + 1} bg />
              </div>
            </>
          )}
          {isLoggedIn && (
            <div
              className="notification"
              onClick={() => {
                setNotifications(!notifications);
              }}
              ref={NotificationRef}>
              <Image src={bell} alt="bell" className="bell" />
              <Image src={bellWhite} alt="bell" className="bell-white" />
              <div className={notifications ? 'notificationWrapper-visible' : 'notificationWrapper'}>
                <Notifications fetchNotifications={fetchNotifications} />
              </div>
            </div>
          )}

          {isLoggedIn ? (
            <>
              <div className="wallet" onClick={() => {}}>
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
                  }}>
                  <figure className="profile">
                    {/* <Image src={profile} alt="profile" /> */}
                    {user?.profilePicture ? (
                      <Image src={user?.profilePicture} alt="profile" width={25} height={25} />
                    ) : (
                      <Image src={profilePlaceHolder} alt="profile" width={25} height={25} />
                    )}
                  </figure>
                  <span className="userName">{user?.fullName || user?.username}</span>
                  <MdArrowDropDown />
                </Button>
                <ProfileMenu />
              </div>
            </>
          ) : (
            <div className="authContainer">
              <Button type="light-green" rounded sm onClick={() => setRegisterModal(true)}>
                <Image src={register} alt="register" />
                Register
              </Button>
              <Button
                rounded
                sm
                btntype="white-blue"
                onClick={() => {
                  setLoginModal(true);
                  // setIsLoggedIn(true);
                  // navigate.push({
                  //   pathname: "http://localhost:3000/",
                  //   query: { type: "seller" },
                  // });
                }}>
                Login
              </Button>
            </div>
          )}
        </div>
        <ProfileMenu openProfile={openProfile} />
      </StyledTopBar>
    </>
  );
};

export default TopBar;
