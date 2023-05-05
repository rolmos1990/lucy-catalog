import React, {useEffect} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import useCategory from "../../hooks/use-category";
import {connect} from "react-redux";
import {clear_category, retrieveCategory} from "../../redux/features/category-slice";
import {clear_product} from "../../redux/features/product-slice";
import {defaultImageCategory, ImageItem} from "../image/ImageItem";


const CategoryList = ({items, retrieveCategory, clear_category, clear_product}) => {

    const delay = 150;

    const { ws, categories  } = useCategory(items, retrieveCategory);
    const portfolioContent = categories;

    const navigate = useNavigate();

    useEffect(() => {
        clear_category();
        clear_product();
    }, []);

    const goToNext = (route) => {
        navigate(route);
    }

    return (
        <>
                {portfolioContent && portfolioContent.map((item) => (
                        <div className="row">
                            <div className="col-xxl-11 m-auto">
                                <div className="mixitUp-container clearfix">
                                    {item.items.map((value, index) => (
                                        <div className="mix" style={{"width": "50%"}} key={value.id} onClick={() => goToNext(value.route)} data-aos="fade-right">
                                            <div className="case-block-three position-relative animate__animated animate__fadeIn" style={{'animationDelay': `${((index + 1) * delay)}ms`}}>
                                                <ImageItem
                                                    src={value.img || defaultImageCategory}
                                                    alt="portfolio"
                                                    className="screen button-category"
                                                    style={{
                                                        "border": "1px gray solid",
                                                        "border-radius": "25px"
                                                    }}
                                                />
                                                <div className="overlay-content d-flex align-items-end">
                                                    <Link
                                                        to={value.route}
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span>{value.title}</span>
                                                        <img
                                                            src={
                                                                require("../../assets/images/icon/icon_28.svg")
                                                                    .default
                                                            }
                                                            alt="icon"
                                                        />
                                                    </Link>
                                                </div>
                                                {/* <!-- /.overlay-content --> */}
                                            </div>
                                            {/* <!-- /.case-block-three --> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                ))}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.category.loading,
        items: state.category.items
    };
};

export default (connect(mapStateToProps, { retrieveCategory, clear_category, clear_product })(CategoryList));
//export default CategoryList;
