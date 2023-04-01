import React from "react";
import { Link } from "react-router-dom";
import CopyrightSocial from "../../footer/CopyrightSocial";
import MobileMenuContent from "../mega-menu/MobileMenuContent";

const SidebarFooter = () => {
  return (
    <>
      {/* Login nav */}

      <MobileMenuContent />
      {/* End sidebar footer serach and address conent */}

      <ul className="d-flex social-icon style-none mt-20">
        <CopyrightSocial />
      </ul>
      {/* End d-flex */}
    </>
  );
};

export default SidebarFooter;
