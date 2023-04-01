import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../../assets/images/logo/lucy-short.png";

const SidebarHeader = () => {
  return (
    <div className="offcanvas-header">
      <div className="logo"
           style={{
               "height": "130px",
               "position": "absolute",
               "opacity": 0.1,
               "top": "100px",
               "left": "-140px"
           }}
      >
        <Link to="/">
          <img
            src={LogoImage}
            alt="brand"
            width="250"
          />
        </Link>
      </div>
      {/* End .logo */}

      <button
        type="button"
        className="close-btn tran3s"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        style={{
            "position": "relative",
            "left": "400px"
        }}
      >
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
    //   {/* End .offcanvas-header */}
  );
};

export default SidebarHeader;
