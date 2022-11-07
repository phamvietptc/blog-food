import CategoriesService from './Categories';
import ApiClient from './ApiClient';

export class ApiService {
  constructor() {
    this.categories = new CategoriesService(ApiClient);
  }
}

const api = new ApiService();

export default api;
