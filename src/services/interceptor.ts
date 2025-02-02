import axios from "axios";

const instance = axios.create({
  baseURL: "http://45.138.158.137:92/api/",
  timeout: 5000,
  headers: {
    accept: "*",
    "Content-Type": "application/json",
  },
});

// ** So‘rov jo‘natishdan oldin `Authorization` qo‘shish **
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// ** Javobni ushlash va xatolikni qayta ishlash **
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized! Redirecting to login...");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
