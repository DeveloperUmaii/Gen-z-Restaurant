import SecTionTitle from "../../Components/SecTionTitle";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(data), console.log(popularItem);
      });
  }, []);

  return (
    <section>
      <SecTionTitle
        subHeading={"Popular Items"}
        heading={"From Our Menu"}
      ></SecTionTitle>

      <div className="">
            {
                menu.map( rawItem => <div key={rawItem?._id} item={rawItem}
                    className="">
                        <h1>{rawItem?.name}</h1> 
                    </div> )
            }
            {
                menu.map( rawItem =>
                <MenuItem key={rawItem?._id} item={rawItem}/>
                )
            }
      </div>
    </section>
  );
};
export default PopularMenu;