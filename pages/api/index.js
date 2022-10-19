import ApiClient from './ApiClient';
import CategoriesService from './categories';

export class ApiService {
    constructor() {
        this.categories = new CategoriesService(ApiClient);
    }
}

const api = ApiClient();

export default api;