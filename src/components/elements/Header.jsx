import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/lucymodas-logo.png";
import logoShort from "../../assets/images/logo/lucymodas-logo-short-white.png";
import {useParams, useNavigate} from "react-router";
import {connect} from "react-redux";
import {clear_category} from "../../redux/features/category-slice";
import {clear_product} from "../../redux/features/product-slice";

const Header = ({productData, categoryData, clear_category, clear_product}) => {
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  let { ws } = useParams();
  let { category } = useParams();
  let { product } = useParams();

  const getProductBack = () => {

    clear_category();
    clear_product();

    return navigate(`/${ws}/${category}/products`);
  }

  const getCategoryBack = () => {

    clear_category();
    clear_product();

    return navigate(`/${ws}`);
  }

  //render the back button
  const getBackButton = () => {

    let goTo = null;
    if(product){
      goTo = getProductBack;
    }
    else if(category){
      goTo = getCategoryBack;
    }

    return <div onClick={goTo} className="text-white d-inline" style={{position:'relative', top: '10px', marginRight: '37px'}}>
      <i className="fa fa-caret-left fa-2x"></i>
    </div>
  }

  const getBannerOnTop = () => {
    if(productData && productData.description){
      return <div className="logo">
        {getBackButton()}
        <Link to="/">
          <img src={logoShort} alt="brand" height="55" style={{display:"inline"}} />
          <p className="menuTitle" style={{display:"inline"}}>{productData.reference}</p>
        </Link>
      </div>

    } if(categoryData && categoryData.name) {
      return <div className="logo">
        {getBackButton()}
        <Link to="/">
          <img src={logoShort} alt="brand" height="55" style={{display:"inline"}} />
          <p className="menuTitle" style={{display:"inline"}}>{categoryData.name}</p>
        </Link>
      </div>
    } else {
      return <div className="logo">
        <Link to="/">
          <img src={logo} alt="brand" height="55" />
        </Link>
      </div>
    }
  }

  window.addEventListener("scroll", changeBackground);
  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-one dark-bg ${
        navbar ? "fixed" : ""
      } `}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          {getBannerOnTop()}
          {/* End .logo */}

          <div className="right-widget d-flex align-items-center">
            <button
              className="sidebar-nav-button text-light"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="bi bi-justify" style={{fontSize: "45px"}}></i>
            </button>
          </div>
          {/* <!-- /.right-widget --> */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

const mapStateToProps = (state) => {
    return {
        loading: state.products.loading,
        productData: state.products.item,
        categoryData: state.category.item
    };
};

export default connect(mapStateToProps, {clear_category, clear_product})(Header);
