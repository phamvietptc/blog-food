import axios from 'axios';
import JSONbig from 'json-bigint';
import { StorageName } from '../../common/constant';
// import { getHotelId } from '../../common/utils';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5678';

const NOT_LOGGED_IN_ERROR_CODE = 401;

const ApiClient = () => {
  const defaultOptions = {
    baseURL,
    transformResponse: (data) => JSONbig({ storeAsString: true }).parse(data),
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const tokenStorage = await localStorage.getItem(StorageName);
    if (tokenStorage !== null) {
      request.headers['token'] = `${JSON.parse(tokenStorage).token}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.data?.code == NOT_LOGGED_IN_ERROR_CODE) {
        console.log('NOT_LOGGED_IN_ERROR_CODE', response);
        localStorage.clear();
        // const hotelId = getHotelId();
        // location.replace(`/`);
      }
      return response;
    },
    (error) => {
      console.log(`error`, error);
    }
  );

  return instance;
};

export default ApiClient();
