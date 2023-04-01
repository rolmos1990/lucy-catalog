import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/elements/Header";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Seo from "../../components/common/seo/Seo";
import ProductList from "../../components/block/products";

const Products = ( ) => {
    return (
        <div className="main-page-wrapper">
            <Seo title="Lucy Catalog - Products"/>
            <Sidebar/>
            <Header/>
            <div className="vcamp-text-block-one pt-180 md-pt-120">
                <div className="container">
                        <ProductList/>
                    {/* End .row */}
                </div>
            </div>

            <div className="counter-section-one mt-170 md-mt-120 mb-70">

            </div>
            <div className="vcamp-footer-one box-layout">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-11 m-auto">
                            <div className="bottom-footer">
                                <CopyrightFooter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="caret-down-area">
            <div className="caret-down-animated">
                <i className="fa fa-caret-down fa-bounce" />
            </div>
            </div>

        </div>
        // End .main-page-wrapper
    );
};

export default Products;
