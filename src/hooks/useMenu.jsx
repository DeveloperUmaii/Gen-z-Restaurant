import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // const popularItem = data.filter((item) => item.category === "popular");
        setMenu(data);
        setLoading(false);
        // console.log(popularItem);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;