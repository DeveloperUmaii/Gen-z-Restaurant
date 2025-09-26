import { Parallax } from "react-parallax";
const Cover = ({ coverImg, title, subTitle }) => {
  return (
    <div className="mt-20">
      <Parallax
        blur={{ min: -15, max: 15 }}
                    bgImage={coverImg}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="hero border-[#8080805d] bg-cover bg-center"
          style={{
          }}
        >
          <div className="hero-overlay bg-[#0000000f] "></div>
          <div className="text-neutral-content text-center w-full flex justify-center my-20 ">
            <div className=" bg-[#00000056] my-6  sm:max-w-5xl  sm:my-10 md:my-12 lg:w-full  sm:px-6 md:px-10 lg:px-20 py-14">
              <h1 className="text-[#ffffff8a] mb-3 sm:mb-4 md:mb-5 text-5xl sm:text-4xl md:text-5xl font-bold font-mono uppercase">
                {title}
              </h1>
              <p className=" uppercase text-[#ffffff93] text-sm sm:text-base md:text-lg leading-relaxed px-5">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
