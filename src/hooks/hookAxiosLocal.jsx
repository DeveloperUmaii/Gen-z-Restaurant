import axios from "axios";

export const backEndServerLinkLocal = axios.create ({
     baseURL:'http://localhost:5000' })
     
const hookAxiosLocal = () => {
    
    return backEndServerLinkLocal;
};

export default hookAxiosLocal;