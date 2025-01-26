import axios from "axios";

import { useLanguage } from "@/hooks/useLanguage";

export const instance = axios.create({
  baseURL: import.meta.env.MODE !== "development" ? import.meta.env.VITE_API_BASE_URL : "http://localhost:5173",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  const { language } = useLanguage();

  config.params = { lang: language };

  return config;
});

instance.interceptors.response.use(
  function (response) {
    // console.log(response.data);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
