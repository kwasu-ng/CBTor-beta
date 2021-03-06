/** @format */

import React from "react";
import SidebarLink from "./SidebarLink";
import PAGES_URL from "../router/router";
import AppLogo from "./AppLogo";

const Sidebar = ({ className, closer }) => {
  return (
    <aside className={`sidebar px-0 bg-primary vh-max-100 ${className}`}>
      <div className="py-4 d-center border-bottom-grey">
        <AppLogo />
      </div>
      <i
        className="fas fa-times position-absolute closer text-white d-lg-none"
        onClick={closer}
      ></i>
      <div className="py-3">
        <SidebarLink
          to={PAGES_URL.EXAM}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610229835/octicon_checklist-24.svg"
          onClick={closer}
        >
          Exams
        </SidebarLink>
        <SidebarLink
          exact
          to={PAGES_URL.WALLET}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610236571/bi_wallet.svg"
          onClick={closer}
        >
          Wallet
        </SidebarLink>
        <SidebarLink
          exact
          to={PAGES_URL.PERFORMANCE}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610236575/ic_outline-performance.svg"
          onClick={closer}
        >
          Performance
        </SidebarLink>
        <SidebarLink
          exact
          to={PAGES_URL.FEEDBACK}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610236584/ic_outline-feedback.svg"
          onClick={closer}
        >
          Feedback
        </SidebarLink>
      </div>
    </aside>
  );
};

export default Sidebar;
