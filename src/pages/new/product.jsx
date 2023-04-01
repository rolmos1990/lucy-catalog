import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/elements/Header";
import Seo from "../../components/common/seo/Seo";
import BlockProduct from "../../components/block/product";

const Product = () => {
    return (
        <div className="main-page-wrapper">
            <Seo title="Lucy Modas"/>
            <Sidebar/>
            <Header/>
            <div className="vcamp-text-block-one md-pt-110">
                <div className="row">
                    <div className="case-study-three animate__animated animate__fadeIn">
                        <BlockProduct/>
                    </div>
                </div>
            </div>
        </div>
        // End .main-page-wrapper
    );
};

export default Product;
