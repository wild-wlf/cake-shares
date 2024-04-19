import React, { useState } from "react";
import Notifications from "../../components/molecules/Notifications";
import { StyledTopBar } from "./TopBar.styles";
import logo from "../../_assets/logo.svg";
import Image from "next/image";
import bell from "../../_assets/bell.svg";
import bellWhite from "../../_assets/bell-white.svg";
import Button from "@/components/atoms/Button";
import register from "../../_assets/register.svg";
import store from "../../_assets/store.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import SideNav from "../../components/atoms/sideNav/index.js";
import RegisterModal from "../../components/atoms/registerModal";
import CenterModal from "@/components/atoms/Modal/CenterModal";
import AdvanceSearch from "../../components/atoms/advanceSearch";

const TopBar = () => {
  const [sideNav, setSidenav] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [registermodal, setRegisterModal] = useState(false);
  const [registermodal2, setRegisterModal2] = useState(false);

  const handleRegisterModal = () => {
    setRegisterModal(false);
    setRegisterModal2(true);
  };

  return (
    <>
      <CenterModal
        open={registermodal}
        setOpen={setRegisterModal}
        title={"Register an Account!"}
        width="646"
      >
        <RegisterModal handleRegisterModal={handleRegisterModal} />
      </CenterModal>

      <CenterModal
        open={registermodal2}
        setOpen={setRegisterModal2}
        title={"Register as a Buyer"}
        width="646"
      >
        <AdvanceSearch />
      </CenterModal>
      <StyledTopBar>
        <div className="logoWrapper">
          <div className="closedNav" onClick={() => setSidenav(true)}>
            <HiOutlineMenuAlt1 />
          </div>
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
          <div className="textField">
            <Image src={store} />
            <span>Marketplace</span>
          </div>
        </div>
        <div className="actions" style={{ display: "Flex", gap: "10px" }}>
          <div
            className="notification"
            onClick={() => {
              setNotifications(!notifications);
            }}
            onMouseLeave={() => {
              setNotifications(false);
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
          <div className="buttonWrapper">
            <Button
              rounded
              sm
              btntype="new"
              className="button"
              onClick={() => setRegisterModal(true)}
            >
              <Image src={register} />
              Register
            </Button>
            <Button rounded sm btntype="blue" className="button">
              Login
            </Button>
          </div>
        </div>
        {/* ///////////////// */}
        <div
          className={sideNav ? "sideNav show" : "sideNav"}
          onMouseLeave={() => {
            setSidenav(false);
          }}
        >
          <SideNav />
        </div>
      </StyledTopBar>
    </>
  );
};

export default TopBar;
