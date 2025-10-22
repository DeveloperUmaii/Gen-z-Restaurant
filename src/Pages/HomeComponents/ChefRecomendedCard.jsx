const ChefRecomendedCard = ({ ChefCard }) => {
  const { recipe, name, image } = ChefCard;
  const handleAddCart = ( anyPeraMetre ) =>{
    console.log(anyPeraMetre,'dfghjkm acii')
  }
  return (
    <div className="w-full max-w-xs mx-auto bg-white border border-blue-500 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <figure className="p-4">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      {/* grow part */}
      <div className="px-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            {name}
          </h2>
          <p className="text-sm text-gray-500 mt-1 text-center">{recipe}</p>
        </div>

        {/* button fixed bottom inside card */}
        <div className="mt-3 pb-4">
          <button  onClick={()=>{handleAddCart(ChefCard)}} className="btn btn-sm btn-primary uppercase w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomendedCard;
