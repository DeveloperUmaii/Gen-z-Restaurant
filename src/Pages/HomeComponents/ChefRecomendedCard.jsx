const ChefRecomendedCard = ({ ChefCard }) => {
  const { recipe, name, image } = ChefCard;
  return (
    <div>
      <div className="border-2 border-red-500 card bg-base-100 w-72 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomendedCard;
