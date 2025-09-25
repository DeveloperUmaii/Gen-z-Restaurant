import banner3 from "../assets/menu/banner3.jpg";
const Cover = () => {
  return (
    <div className="mt-20">
      <div
        className="hero border-[#8080805d] bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner3})`,
        }}
      >
        <div className="hero-overlay bg-[#0000006b] rounded-2xl"></div>
        <div className="text-neutral-content text-center w-full flex justify-center my-20 ">
          <div className=" bg-[#7c7c7c86] my-6  sm:max-w-5xl  sm:my-10 md:my-12 lg:w-full  sm:px-6 md:px-10 lg:px-20 py-14">
            <h1 className="text-[#0000008a] mb-3 sm:mb-4 md:mb-5 text-3xl sm:text-4xl md:text-5xl font-bold font-mono">
              Generation -{" "}
              <span className="text-4xl sm:text-5xl md:text-6xl items-center text-[#ff5411]">
                Z
              </span>
            </h1>
            <p className="text-[#00000093] text-sm sm:text-base md:text-lg leading-relaxed px-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
