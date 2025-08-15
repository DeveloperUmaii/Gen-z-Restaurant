import { useEffect, useState } from "react";
import SecTionTitle from "../../Components/SecTionTitle";
import ChefRecomendedCard from "./ChefRecomendedCard";

const ChefRecomended = () => {
  const [ChefRecomended, setChefRecomended] = useState ([]);
  console.log(ChefRecomended);
    useEffect ( () => {
      fetch ('menu.json')
        .then( (res) => res.json())
        .then ((data) => {
          setChefRecomended(data)
        })
    }, [] )


  return (
    <div>
      <SecTionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommendes"}
      ></SecTionTitle>
      
      <div className="grid grid-cols-3 gap-x-2 gap-y-1">
          {
            ChefRecomended.map( ChefReciepe => 
            <ChefRecomendedCard key={ChefReciepe?._id} ChefCard ={ChefReciepe} 
            />
         )}
      </div>
    </div>
    
  );
};

export default ChefRecomended;
