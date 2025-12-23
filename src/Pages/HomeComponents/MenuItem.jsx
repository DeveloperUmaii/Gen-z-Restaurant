const MenuItem = ({item}) => {
    const {recipe, name, price, recipeCover} = item;
    return (
        <div className="flex ">
            {/* <h5 className="text-red-500">{recipe}</h5>
            <h5 className="text-white">{item?.recipe}</h5> */}

                {/* Image Section */}
            <div className=" flex items-center w-2/12"><img className="h-12  w-14 rounded-br-full rounded-r-full rounded-b-full" src={recipeCover} alt="" srcSet="" /></div>

            {/* Details.. */}
            <div className=" w-9/12">
                <h2 className="uppercase text-xl font-semibold">{name}  ------------------</h2>
                <h1 className="">{recipe}</h1>

            </div>
            <div className=" w-1/12">
                <h1 className="text-orange-500 font-extrabold">${price}</h1>
            </div>
        </div>
    );
};

export default MenuItem;
