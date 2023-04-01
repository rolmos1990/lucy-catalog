import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/elements/Header";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Seo from "../../components/common/seo/Seo";
import {useParams} from "react-router";
import CategoryList from "../../components/block/block-list";
import {_decodePhone} from "../../utils/helpers";


const Home = (props) => {

    let { ws } = useParams();
    const selectedWhatsapp = _decodePhone(ws);


    return (
        <div className="main-page-wrapper">
            <Seo title="Lucy Modas"/>
            {/* End Seo Related data */}

            {/* <!--
      =============================================
      Sidebar Nav
      ==============================================
        --> */}
            <Sidebar/>

            {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
            <Header/>

            {/* <!--
        =============================================
        Vcamp Text Block One
        ==============================================
        --> */}
            <div className="vcamp-text-block-one pt-180 md-pt-120">
                <div className="container">
                    <div className="case-study-three">
                        <CategoryList/>
                    </div>
                    {/* End .row */}
                </div>
            </div>
            {/* <!-- /.vcamp-text-block-one --> */}

            {/* <!--
        =====================================================
        Counter Section One
        =====================================================
        --> */}
            <div className="counter-section-one mt-170 md-mt-120 mb-70">

            </div>
            {/* End .counter-section */}

            {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
            <div className="vcamp-footer-one box-layout">
                {/* <!-- /.bg-wrapper --> */}

                <div className="container">
                    <div className="row">
                        <div className="col-xxl-11 m-auto">
                            <div className="bottom-footer">
                                <CopyrightFooter/>
{/*
                                <p style={{backgroundColor: 'black', padding: '20px', color: 'white'}}>Develop mode ==> Whatsapp Seleccionado: {selectedWhatsapp}</p>
*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /.vcamp-footer-one --> */}
        </div>
        // End .main-page-wrapper
    );
};

export default Home;
