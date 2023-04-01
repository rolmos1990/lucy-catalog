import React, {useEffect, useRef, useState} from "react";

import {clear_product, retrieveProduct} from "../../redux/features/product-slice";
import {connect} from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';
import {useParams} from "react-router";
import {clear_category, getCategory} from "../../redux/features/category-slice";
import ProductDataService from "../../redux/services/product.service";
import {getImageByQuality, productPriceWithDiscount} from "../../utils/helpers";
import {Link} from "react-router-dom";
import {ImageItem} from "../image/ImageItem";

const ProductList = ({clear_product, getCategory, clear_category}) => {

    let { ws, category } = useParams();
    let [list, setList] = useState([]);
    let [loading, setLoading] = useState(false);
    const scroll = useRef(null);
    let [reset, setReset] = useState(false);
    let [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        setHasMore(true);

        clear_product();
        setList([]);
        scroll.current.pageLoaded = 1;
        setReset(!reset);
    }, [category]);

    useEffect(() => {
        getMore();
    }, [reset]);



    useEffect(() => {
        clear_product();
        getCategory({category});
    }, []);

    const getConverterArrayPortfolio = (portfolioContent) => {
        //group by 2 columns
        let output = []
        if(!portfolioContent){
            return [];
        }
        const quantity = portfolioContent.length;
        for(let index = 0; index < quantity; index = index + 2){
            output.push([portfolioContent[index], portfolioContent[index + 1]]);
        }
        return output;
    }

    const getAdaptorProducts = (allProducts) => {
        //adaptor response for this items
        if(allProducts && allProducts.length > 0){

            const getUrl = (_item) => {
                try{
                    return `/${ws}/${_item.category.id}/p/${_item.id}`;
                }
                catch(e){
                    return '#';
                }
            }

            //img1
            const _products = allProducts.map(_item => ({
                id: _item.id,
                title: _item.name,
                description: _item.description,
                img: getImageByQuality(_item.productImage[0], 'medium'),
                reference: _item.reference,
                price: productPriceWithDiscount(_item),
                priceClear: _item.price,
                discount: _item.discount,
                status: _item.status,
                category: _item.category && _item.category.name,
                categoryDiscount: (_item.category && _item.category.discount) || 0,
                route: getUrl(_item)
            }));

            return _products;
        } else {
            return [];
        }
    }

    const getMore = async (page = 1) => {
        //get more items
        try {
            setLoading(true );
            const offset = (page - 1) * 10;
            const res = await ProductDataService.getAll(category, 10, offset);
            if(res.data.data.length >= 0){
                const _data = res.data.data;
                const _meta = res.data.meta;
                if(_meta.totalRegisters > offset + 10){
                    setHasMore(true);
                    setLoading(false);
                } else {
                    setHasMore(false);
                    setLoading(false);
                }

                const formatted = getConverterArrayPortfolio(getAdaptorProducts(_data));
                const newList = list.concat(formatted);
                setList(newList);
            }
        }catch(e){
            setLoading(false);
            console.log('no se pudo obtener registros...');
        }
    }

    const delay = 100;

    const mediaQuerySmall = window.matchMedia('(min-width: 768px)');
    const mediaQueryBig = window.matchMedia('(min-width: 868px)');

    const renderItem = (_item, _index) =>
        <Link
            to={_item.route}
            className="d-flex justify-content-between align-items-center"
        >
        <div className="animate__animated animate__fadeIn" style={{marginBottom: '10px', 'animationDelay': `${((_index + 1) * delay)}ms`}} key={_item.id}>
        <div className="header-styling">&nbsp; <i className="fa fa-search text-white fa-bold" style={{'fontSize': '15px'}}></i></div>
        <div style={{'textAlign': 'center'}}>
            <ImageItem
                src={_item.img || ''}
                alt="portfolio"
                className="screen"
                style={{'min-width': '100%'}}
            />
            <div className="watermark">{_item.reference}</div>
        </div>
        <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'margin': '5px 0px'}}>
            <div>
                <h6>{_item.category}</h6>
                <h5 className="text-lucy-primary" style={{'font-size': mediaQuerySmall ? '14px' : '20px'}}>{_item.reference}</h5>
            </div>
            <div className="currency">
                <div className="currency-icon">
                    <h6 style={{'margin': '0px 10px'}}>PESOS</h6>
                    <img style={{'height': mediaQuerySmall ? '16px' : '32px'}} src="http://lucymodas.com/img/bandera.png"/>
                </div>
                <h5 style={{'font-size': mediaQuerySmall ? '14px' : '20px'}}>{_item.price}</h5>
            </div>
        </div>
        </div></Link>;

    return (
        <InfiniteScroll
            ref={scroll}
            pageStart={1}
            loadMore={getMore}
            threshold={0}
            initialLoad={true}
            hasMore={!loading && hasMore}
            loader={<h3 className="loader text-muted text-center" key={0}> ... </h3>}
        >
            <div className="container-fluid">
                {list && list.map((item,index) => (
                    <>
                    <div className="d-flex justify-content-center" style={{'width': '100%'}}>
                        <div className="column" style={{'margin': '0.5em', width: mediaQueryBig? '450px' : (mediaQuerySmall ? '50%' : '35%')}}>
                            {item[0] && renderItem(item[0], index)}
                        </div>
                        <div className="column" style={{'margin': '0.5em', width: mediaQueryBig? '450px' : (mediaQuerySmall ? '50%' : '35%')}}>
                            {item[1] && renderItem(item[1], index)}
                        </div>
                    </div>
                    <div className="divider"><div className="icon">&nbsp;</div></div>
                    </>
                ))}
            </div>
        </InfiniteScroll>
    );
};
const mapStateToProps = (state) => {
    return {
        items: state.products.items,
        categoryData: state.category.item
    };
};

export default connect(mapStateToProps, { retrieveProduct, getCategory, clear_product, clear_category })(ProductList);
//export default ProductList;
