import axios from 'axios';
import { getUrl } from 'src/utils/urls';
import { LocalStorage } from 'quasar';

const axiosInstance = axios.create(getUrl('axios.axiosDefaultData'));
export default ({ Vue, router }) => {
  // Request interceptor
  axiosInstance.interceptors.request.use((request) => {
    const token = LocalStorage.getItem('authToken');
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });

  axiosInstance.interceptors.response.use(response => response, (error) => {
    const { status } = error.response || {};
    devlog.log('response_status', status);

    if (status === 404) {
      router.push({ name: '404' });
    }
    if ((status === 401)) {
      LocalStorage.clear();
    }

    return Promise.reject(error);
  });
  Vue.prototype.$axios = axiosInstance;
};

export { axiosInstance };
