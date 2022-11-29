// http://194.233.73.110:5678/documentation
import axios from "axios";

const CategoryUrl = '/api/categories';
const token = 'c5921424df8db38ba6fb7bdd505f3a92b15fcf1016104963142ff8e15aa56376294ddc047acc38bd2cd7175261d1880e4b1bd7d6b39605eebf3d6bd4419a90cf7ab07942a05ecb9c9429662f21ee4d53256a2de2ac9f4a4906c7c09ed537b5709267cdd5423ef9d4636dcf96c8d23ad602535a56bb1c631ed922156f2fcdb2b0'
class CategoryService {
    constructor(axios) {
        this.axios = axios;
    }

    getCategoryDetail = async (params) => {
        const res = await this.axios.get(
            `${CategoryUrl}`,
            {headers: {'Authorization': `Bearer ${token}`}},
            {params}
        );
        return res.data;
    };


}

export default CategoryService;