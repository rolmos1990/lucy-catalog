import React, {useEffect, useState} from "react";

import whatsappCapa from "../../assets/images/media/whatsapp_pedi.png";
import videoPlayPng from "../../assets/images/media/video_play.png";
import {connect} from "react-redux";
import {clear_product, getProduct, retrieveProduct} from "../../redux/features/product-slice";
import {useParams} from "react-router";
import {_decodePhone, getBaseService, getImage, getTemplateUrlService} from "../../utils/helpers";
import ModalVideo from "react-modal-video";
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
        height: window.screen.height - 120,
        width: 'auto'
    };

    return (
        <>
            {item.video && (
                <ModalVideo
                    channel="vimeo"
                    autoplay
                    isOpen={open}
                    videoId={item.video}
                    onClose={() => setOpen(false)}
                />
            )}

        <div style={{"display": "flex", "justifyContent":"center","alignItems": "center"}}>
            <div className={productdata && productdata.template === 5 ? "btn-actions-product-left animation-right-left" : "btn-actions-product animation-right-left"}>
                <Link to={getUrlWhatsapp()} params={{}} target="_blank">
                    <div className="btn-request">
                        <img src={whatsappCapa} style={{height: "50px"}}/>
                    </div>
                </Link>
                {item.video && (
                    <div className="btn-request" onClick={() => setOpen(true)}>
                        <img src={videoPlayPng} style={{height: "55px"}}/>
                    </div>
                )}
            </div>
            <div style={sectionStyle}>&nbsp;
                <img src={getImage(item.catalogUrl)} style={{visibility:'hidden', height: window.screen.height - 120, width: 'auto'}} />
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
