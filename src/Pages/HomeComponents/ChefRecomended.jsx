import { useEffect, useState } from "react";
import SecTionTitle from "../../Components/SecTionTitle";
import ChefRecomendedCard from "./ChefRecomendedCard";
import useMenu from "../../hooks/useMenu";

const ChefRecomended = () => {
  const [menu] = useMenu();

  return (
    <div>
      <SecTionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommendes"}
      ></SecTionTitle>

      <div className="grid grid-cols-3 gap-x-2 gap-y-1">
        {menu.map((ChefReciepe) => (
          <ChefRecomendedCard key={ChefReciepe?._id} ChefCard={ChefReciepe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecomended;
