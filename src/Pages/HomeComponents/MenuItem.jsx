const MenuItem = ({item}) => {
    const {recipe} = item;
    return (
        <div>
            <h5 className="text-red-500">{recipe}</h5>
            <h5 className="text-white">{item?.recipe}</h5>
        </div>
    );
};

export default MenuItem;