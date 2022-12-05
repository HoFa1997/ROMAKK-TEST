import axios from "axios";
import { getAccessToken } from "../../hook/storage";

import { LoginData, LoginRes, ProductsRes } from "../../interface/loginData";

export const loginApi = async (loginData: LoginData) => {
  return await axios
    .post<LoginRes>("https://dummyjson.com/auth/login", {
      username: loginData.username,
      password: loginData.password,
    })
    .catch((e) => e.message);
};

export const productsApi = async () => {
  const token = getAccessToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios
    .get<ProductsRes>("https://dummyjson.com/auth/products", config)
    .catch((e) => e.message);
};
