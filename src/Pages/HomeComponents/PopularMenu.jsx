import SecTionTitle from "../../Components/SecTionTitle";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] =useMenu()
  const popularItem = menu.filter((item) => item.category === "popular");

  return (
    <section className="px-4">
      <SecTionTitle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SecTionTitle>

      <div className="grid grid-cols-2 gap-x-2">
            {/* {
                menu.map( rawItem => <div key={rawItem?._id} 
                    className="">
                        <h1>{rawItem?.name}</h1> 
                    </div> )
            } */}
            {
                popularItem.map( rawItem =>
                <MenuItem key={rawItem?._id} item={rawItem}/>
                )
            }
        
      </div>
      <div className=" flex justify-center my-4">
              <button className="btn btn-xs rounded-3xl border-4 shadow-none opacity-90 border-black border-x-0 border-t-0 bsm:btn-sm md:btn-md lg:btn-lg xl:btn-xl uppercase ">View full menu</button>
            </div>
    </section>
  );
};
export default PopularMenu;