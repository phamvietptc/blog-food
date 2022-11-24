// http://194.233.73.110:5678/documentation#/Category/get%2Fcategories

// Want to use async/await? Add the `async` keyword to your outer function/method.
// import axios from "axios";

// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

const CategoryUrl = '/public/categories';

class CategoryService {
    constructor(axios) {
        this.axios = axios;
    }

    getCategoryDetail = async (params) => {
        const res = await this.axios.get(
            `${CategoryUrl}/getCategoryDetail`,
            {params}
        );
        return res.data;
    };


}

export default CategoryService;