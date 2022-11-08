// http://194.233.73.110:5678/documentation
import axios from "axios";

const CategoryUrl = '/api/categories';
class CategoryService {
    constructor(axios) {
        this.axios = axios;
    }

    getCategoryDetail = async (params) => {
        const res = await this.axios.get(
            `${CategoryUrl}/CategoryResponseDataObject`,
            {params}
        );
        return res.data;
    };


}

export default CategoryService;
