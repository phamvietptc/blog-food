// https://
const categoriesUrl = '/public/categories';
const categoriesTypeUrl = '/public/categoriesType';

class CategoriesService {
  constructor(axios) {
    this.axios = axios;
  }

  getInfo = async (id) => {
    const res = await this.axios.get(`${categoriesUrl}/getInfo?id=${id}`);
    return res?.data;
  };

  getType = async (params) => {
    const res = await this.axios.get(`${categoriesTypeUrl}/queryList`, {
      params,
    });
    return res?.data;
  };

  queryPage = async (pagingBody) => {
    const res = await this.axios.post(
      `${categoriesUrl}/queryPage`,
      pagingBody
    );
    return res?.data;
  };
}

export default CategoriesService;
