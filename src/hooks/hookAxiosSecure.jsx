import axios from "axios";

export const backEndServerLink = axios.create ({
     baseURL:'http://localhost:5000' })
     
       const hookAxiosSecure = () => {
           return backEndServerLink;
};

export default hookAxiosSecure;