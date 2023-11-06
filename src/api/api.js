import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};
export default axiosWithAuth;
export let API;
const renewAPI = (token) => {
  token && localStorage.setItem("token", token);

  API = axiosWithAuth();
};

renewAPI(localStorage.getItem("token"));
