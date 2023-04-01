import http from "./api";

class ProductDataService {
    getAll(category, limit = 20, offset = 0) {
        return http.get("/product/public/all?limit=" + limit + '&offset=' + offset + '&published=1&order=orden&orderType=asc&conditional=category::' + category);
    }

    get(id) {
        return http.get(`/product/public/product?id=${id}`);
    }
}

export default new ProductDataService();
