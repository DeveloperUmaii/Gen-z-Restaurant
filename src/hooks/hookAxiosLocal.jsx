import axios from "axios";

export const backEndServerLinkLocal = axios.create({
  baseURL: "https://gen-z-resturant-server.vercel.app",
});

const hookAxiosLocal = () => {
  return backEndServerLinkLocal;
};

export default hookAxiosLocal;
