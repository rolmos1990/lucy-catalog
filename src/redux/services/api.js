import axios from "axios";
import {getBaseService} from "../../utils/helpers";

export default axios.create({
    baseURL: getBaseService() + '/',
    headers: {
        "Content-type": "application/json"
    }
});
