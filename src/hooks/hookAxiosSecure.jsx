import axios from "axios";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const backEndServerLink = axios.create({
  baseURL: "http://localhost:5000",
});

const hookAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = UseAuthHook();

  useEffect(() => {
    // request interceptor
    const reqInterceptor = backEndServerLink.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        // console.log('Request stop bye Interceptors :_',token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }
    );

    // response interceptor
    const resInterceptor = backEndServerLink.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;
        // console.log('status error in the INTERCEPTORS',status)
        if (status === 401 || status === 403) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // cleanup (VERY IMPORTANT)
    return () => {
      backEndServerLink.interceptors.request.eject(reqInterceptor);
      backEndServerLink.interceptors.response.eject(resInterceptor);
    };
  }, [logOut, navigate]);

  return backEndServerLink;
};

export default hookAxiosSecure;
