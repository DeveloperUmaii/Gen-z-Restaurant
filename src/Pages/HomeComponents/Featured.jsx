import SecTionTitle from "../../Components/SecTionTitle";
import FeaturedImage from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="my-16 ">
      <div
        className="hero min-h-screen "
        style={{
            backgroundImage: `url(${FeaturedImage})`,
          }}
      >
        <div className="mb-96 pb-20 mt-0 w-full ">
          <SecTionTitle subHeading={"Check it out"} heading={"Featured Menu"} />
        </div>
        <div className="mt-36">
            <div className="flex justify-between ">
                <div className=" w-6/12  my-1 sm:my-10 md:my-12 rounded-lg px-1 sm:px-6 md:px-10 lg:px-20 py-1">
                  <img src={FeaturedImage} className="w-full border-2 border-[#b8b8b868] " alt="" srcset="" />
                </div>

                <div className=" w-6/12  items-center  my-1 sm:my-10 md:my-12 rounded-lg px-1 sm:px-6 md:px-10 lg:px-20 py-1">
                  <h1 className="text-start text-white py-1 font-bold">March 20, 2023</h1>
                  <h2 className="text-start text-white py-1 font-semibold">WHERE CAN I GET SOME?</h2>
                   <p className="text-start text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    voluptate facere, deserunt dolores maiores quod nobis quas
                    quasi. Eaque repellat recusandae ad laudantium tempore
                    consequatur consequuntur omnis ullam maxime tenetur.
                  </p>
                    <div className="py-5">
                          <button className="text-white border-2 border-white btn btn-outline btn-secondary border-x-0 border-t-0 rounded-full font-bold flex justify-start">
                            READ MORE
                          </button>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
