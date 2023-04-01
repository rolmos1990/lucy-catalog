import React from "react";
import { Routes, Route } from "react-router-dom";
import {Navigate} from "react-router";
import { store } from "./redux/store";

// All Elements  dropdown Menu inner pages add comment
import ScrollTopBehaviour from "./components/elements/ScrollTopBehaviour";
import NotFound from "./pages/NotFound";
import Home from "./pages/new/home";
import Products from "./pages/new/products";
import Product from "./pages/new/product";
import {Provider} from "react-redux";

const AllRoutes = () => {
    return (
        <Provider store={store}>
            <ScrollTopBehaviour />
            <Routes>
                {/* elements dropdown Basic pages */}
                <Route path="/:ws" element={<Home />} />
                <Route path="/:ws/:category/products" element={<Products />} />
                <Route path="/:ws/:category/p/:product" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Provider>
    );
};

export default AllRoutes;
