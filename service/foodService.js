import axios from "../axios";

const getAllFoodInfo  = () => {
    return axios.get(`/api/get-all-food-info`);
}

export default {
    getAllFoodInfo
}