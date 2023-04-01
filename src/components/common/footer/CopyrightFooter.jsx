import React from "react";
import { Link } from "react-router-dom";
import CopyrightSocial from "./CopyrightSocial";

const CopyrightFooter = () => {
  return (
    <div className="row">
      {/* End .col */}

      <div className="col-lg-4 order-lg-2 mb-15">
        <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
          <CopyrightSocial />
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-4 order-lg-1 mb-15">
        <p className="copyright text-center">
          {" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucy Modas
          </a>{" "}
        </p>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
