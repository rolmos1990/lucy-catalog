import http from "./api";

class CategoryDataService {
    getAll() {
        return http.get("/category/public/all");
    }

    get(id) {
        return http.get(`/category/public/category?id=${id}`);
    }
}

export default new CategoryDataService();
