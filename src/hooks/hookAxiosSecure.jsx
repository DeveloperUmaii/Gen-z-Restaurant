import axios from "axios";

export const backEndServerLink = axios.create ({
     baseURL:'http://localhost:5000' })
     
      const hookAxiosSecure = () => {
      const navigate = useNavigate()
  // Add a request interceptor
backEndServerLink.interceptors.request.use(function (config) {
          const token = localStorage.getItem('access-token')
          console.log('Request stop bye Interceptors :_',token)
          config.headers.authorization = `Bearer ${token}`
        return config;
      }),   
      function (error) { return Promise.reject(error);}

backEndServerLink.interceptors.response.use(function(response) {
    return response;
  }, (error) => {
    const status = error.response.status;
    console.log('status error in the INTERCEPTORS',status)
    if(status === 401 || status === 403 ){
        navigate('/login')
    }
    return Promise.reject(error);
  });

  return backEndServerLink;
};

export default hookAxiosSecure;