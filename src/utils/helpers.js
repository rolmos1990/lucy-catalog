import moment from "moment";

export const priceFormat = (amount = 0, currency = "", decimalWithCommas = true) => {

    if (amount === 0 || amount === "" || amount === undefined) {
        return "0.00";
    }

    let amountRender = (parseFloat(amount).toFixed(2));
    if (decimalWithCommas) {
        amountRender = numberWithCommas(amountRender);
        if(currency && currency != ""){
            amountRender = `${currency} ${amountRender}`;
        } else {
            amountRender = `${amountRender}`;
        }
    }
    return amountRender;
}

const numberWithCommas =(x) =>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getBaseService = () => {
    return window.location.protocol + "//" + process.env.REACT_APP_BASE_SERVICE_URL;
}

export const getTemplateUrlService = () => {
    return window.location.protocol + "//" +process.env.REACT_APP_BASE_SERVICE_URL + '/template/38';
}

export const getTestImageBaseService = () => {
    return 'http://moie.lucymodas.com:18210';
    return process.env.REACT_APP_BASE_SERVICE_URL;
}

export const getImage = (relativePath) => {
    return window.location.protocol + "//" +process.env.REACT_APP_BASE_SERVICE_URL + '/' + relativePath;
}

export const getMoment =() =>{
    try {
        return moment();
    }catch (e){
        console.log(e)
    }
    return "";
}


export const getImageByQuality = (imgData, quality) => {
    if(!imgData) return null;

    const path = imgData.path && imgData.path.includes('uploads') ? getTestImageBaseService() + '/' : getTestImageBaseService() + '/';

    let result = imgData.path;
    if (!imgData.thumbs) {
        return `${path}${result}`;
    }
    try {
        if (imgData.thumbs) {
            let thumbs = imgData.thumbs;
            if (imgData.thumbs.startsWith && imgData.thumbs.startsWith('{')) {
                thumbs = JSON.parse(imgData.thumbs);
            }
            if (thumbs[quality]) {
                result = thumbs[quality];
            }
        }
    } catch (e) {
        console.error('Error: ' + imgData.thumbs, e);
    }
    return `${path}${result}?${getMoment().unix()}`;
}

export const productPriceWithDiscount = (product) => {
    let discount = 0;
    if(product) {
        if (product.discount > 0) {
            discount = (product.price * product.discount) / 100;
        } else if (product.category && product.category.discountPercent > 0) {
            discount = (product.price * product.category.discountPercent) / 100;
        }

        return priceFormat(product.price - discount, '$', true);
    } else {
        return 0;
    }
}


export const _decodePhone = (_b64string) => {
    return atob(_b64string);
}
