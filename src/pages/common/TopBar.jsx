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

const TopBar = () => {
  const [sideNav, setSidenav] = useState(false);
  const [notifications, setNotifications] = useState(false);

  return (
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
          <Button rounded sm btntype="new" className="button">
            <Image src={register} />
            Register
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
  );
};

export default TopBar;
