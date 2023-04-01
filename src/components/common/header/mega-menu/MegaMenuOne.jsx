import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import logo from "../../../../assets/images/logo/vCamp_01.png";
import homeDropdownData from "./dropdown-data/homeMegaMenuData";
import elementsMegaMenuData from "./dropdown-data/elementsMegaMenuData";
import portfolioMegaMenuData from "./dropdown-data/portfolioMegaMenuData";
import pagesMegaMenuData from "./dropdown-data/pagesMegaMenuData";
import shopDropdownData from "./dropdown-data/shopDropdownData";
import blogDropdownData from "./dropdown-data/blogDropdownData";

const MegaMenuOne = () => {
  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="brand identity" width="127" />
          </Link>
        </div>
      </li>
      {/* End Brnad */}

      <li className="nav-item  dropdown mega-dropdown">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Home
        </button>
        <ul className="dropdown-menu">
          <li className="pb-20">
            <div className="row gx-3">
              {homeDropdownData.map((val) => (
                <div
                  className={`col-lg-2 mt-15 border-0 text-center home-sub-menu ${val.cursorEvent}`}
                  key={val.id}
                >
                  <Link to={val.routeLink} className="d-block img-meta">
                    <img src={val.img} alt="homeimage" className="tran4s" />
                    <div className={val.comingSoonClass}>
                      <span>{val.comingSoon}</span>
                    </div>
                  </Link>
                  <CustomLink to={val.routeLink} className="dropdown-item">
                    <span>{val.title}</span>
                  </CustomLink>
                </div>
              ))}
            </div>
            {/* End .row */}
          </li>
        </ul>
      </li>
      {/* End Home dropdown */}

      <li className="nav-item dropdown mega-dropdown-sm">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Elements
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              {elementsMegaMenuData.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            {/* End .row */}
          </li>
        </ul>
      </li>
      {/* End elements dropdown */}

      <li className="nav-item dropdown mega-dropdown">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Portfolio
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row justify-content-between">
              {portfolioMegaMenuData.map((item) => (
                <div className="col-lg-2" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li>
      {/* End portfolio dropdown */}

      <li className="nav-item dropdown mega-dropdown-md">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Pages
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              {pagesMegaMenuData.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li>
      {/* End pages dropdown */}

      <li className="nav-item dropdown mega-dropdown-sm">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Shop
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              {shopDropdownData.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li>
      {/* End shop dropdown */}

      <li className="nav-item dropdown mega-dropdown-sm">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Blog
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              {blogDropdownData.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li>
      {/* End blog dropdown */}
    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
