import React from 'react';

const PageCover = ({coverImg, title, subTitle}) => {
    return (
    <div className="">
      <div
        className="hero border-[#8080805d] bg-cover bg-center"
        style={{
          backgroundImage: `url(${coverImg})`,
        }}
      >
        <div className="hero-overlay bg-[#00000021] "></div>
        <div className="text-neutral-content text-center w-full flex justify-center my-20 ">
          <div className=" bg-[#00000076] my-6  sm:max-w-5xl  sm:my-10 md:my-12 lg:w-full  sm:px-6 md:px-10 lg:px-20 py-24">
            <h1 className="text-[#ffffff8a] mb-3 sm:mb-4 md:mb-5  sm:text-4xl md:text-5xl lg:text-8xl font-bold font-mono uppercase">
                {title}
            </h1>
            <p className=" uppercase text-[#ffffff93] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed px-5">
             { subTitle }
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PageCover;