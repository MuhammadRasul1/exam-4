import axios from "axios";
import { observer } from "mobx-react-lite";
import { authStore } from "store/auth.store";

export const refreshToken = () => {
  request.post("/token/refresh", { refresh_token: authStore.token.refresh_token });
};


const request = axios.create({ baseURL: import.meta.env.VITE_BASE_URL, });

const onError = (error) => {
  if(error.code === 401) {
    refreshToken();
  };
};


request.interceptors.response.use(response => response, onError);

observer(request.interceptors.request.use(config => {
    let adminToken = authStore.userData.access_token
  config.headers.Authorization = adminToken
  return config;
}))


export default request;
