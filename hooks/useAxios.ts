import axios from "axios";
import { useAuthStore } from "@stores/authStore";

const useAxios = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL!
  });

  api.interceptors.request.use((config) => {
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  return api;
};

export default useAxios;
