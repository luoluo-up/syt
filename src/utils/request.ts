import axios from "axios";
const request = axios.create({
  baseURL: "https://syt-api.ohsehun.xyz/hospital",
  timeout: 5000,
});

//请求拦截器
request.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    let status = error.response.status;
    switch (status) {
      case 404:
        ElMessage({ type: "error", message: error.message });
        break;
      case 500:
        ElMessage({ type: "error", message: error.message });
        break;
    }
    return Promise.reject(new Error(error.message));
  }
);

export default request;
