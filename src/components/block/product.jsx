import React, {useEffect, useState} from "react";

import whatsappCapa from "../../assets/images/media/whatsapp_pedi.png";
import videoPlayPng from "../../assets/images/media/video_play.png";
import {connect} from "react-redux";
import {getProduct} from "../../redux/features/product-slice";
import {useParams} from "react-router";
import {_decodePhone, getImage, getTemplateUrlService} from "../../utils/helpers";
import {connection} from "../../api/connection";
import Mustache from 'mustache/mustache';
import {Link} from "react-router-dom";

const BlockProduct = ({getProduct, item}) => {

    const [open, setOpen] = useState(false);
    const [template, setTemplate] = useState(false);
    const [productdata, setProductdata] = useState({});
    let { ws, category, product } = useParams();

    const selectedWhatsapp = _decodePhone(ws);

    useEffect(() => {
        getProduct({product});
    }, []);

    useEffect(() => {
        let _productData = item;
         setProductdata(_productData);
        getTemplates(_productData);
    }, [item]);

    if(!item){
        return;
    }

    async function getTemplates(_productData){
        const host = getTemplateUrlService();
        const templates = await connection(host);
        if(templates.data && _productData){

            console.log('productDataTemplate: ', _productData);

            var output = Mustache.render(templates.data.template, _productData);
            setTemplate(output);
        }
    }
    function getUrlWhatsapp(){
        return `https://wa.me/${selectedWhatsapp}/?text=${encodeURI(template)}`;
    }

    var sectionStyle = {
        backgroundImage: "url(" + getImage(item.catalogUrl) + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: window.screen.width,
        height: 'auto'
    };

    const openModal = () => {
        window.scrollTo(0, 0);
        setOpen(true);
    }

    return (
        <>
            {item.video && (
                <div className={ "position-absolute " + (open ? 'animate__animated animate__fadeIn' : 'fade d-none') }  style={{"zIndex": 10000, height: '100%', width: '100%', backgroundColor: 'white', overflow: 'hidden'}} >
                    <div style={{"position": "relative"}}>
                    <button onClick={() => setOpen(false)} type="button" className="close-btn tran3s" data-bs-dismiss="offcanvas" aria-label="Close"
                            style={{"position": "relative", "left": "20px"}}><i className="bi bi-x-lg"></i></button>
                    <div style={{
                        "left": "0",
                        "width": "100%",
                        "height": "0",
                        "position": "relative",
                        "paddingBottom": "177.78%"
                    }}>
                        <figure
                            style={{
                                "left": "0%",
                                "width": "90%",
                                "height": "0",
                                "position": "relative",
                                "paddingBottom": "177.78%",
                                "marginBlockEnd": "0",
                                "marginBlockStart": "0",
                                "marginInlineStart": "0",
                                "marginInlineEnd": "0"}}>
                            <iframe src={"https://api.vadoo.tv/iframe_test?id=" + item.video}
                                    scrolling="no"
                                    style={{
                                        "border": "0",
                                        "top":"0",
                                        "left": "8%",
                                        "width": "90%",
                                        "height": "70%",
                                        "position": "absolute",
                                        "overflow":"hidden",
                                        "borderRadius": "5px"
                                    }}
                                    allowFullScreen="1"
                                    allow="autoplay"
                            >
                            </iframe>
                        </figure>
                    </div>
                    </div>
                </div>
            )}

        <div style={{"display": "flex", "justifyContent":"center","alignItems": "center"}}>
            <div className={productdata && productdata.template === 5 ? "btn-actions-product-left animation-right-left" : "btn-actions-product animation-right-left"}>
                <Link to={getUrlWhatsapp()} params={{}} target="_blank">
                    <div className="btn-request">
                        <img src={whatsappCapa} style={{height: "50px"}}/>
                    </div>
                </Link>
                {item.video && (
                    <div className="btn-request" onClick={openModal}>
                        <img src={videoPlayPng} style={{height: "55px"}}/>
                    </div>
                )}
            </div>
            <div>
                <img src={getImage(item.catalogUrl)} style={{height: 'auto', width: window.screen.width}} />
            </div>
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.products.loading,
        item: state.products.item
    };
};

export default connect(mapStateToProps, { getProduct })(BlockProduct);
