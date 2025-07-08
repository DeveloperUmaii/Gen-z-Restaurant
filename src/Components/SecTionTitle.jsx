
const SecTionTitle = ({ heading, subHeading }) => {
    return (
        <div className="my-2 w-2/6 mx-auto flex flex-col justify-center items-center text-center ">
            <h1 className="text-[#ff4912] font-mono">--- {subHeading} ---</h1>
            <h1 className=" uppercase font-bold text-3xl font-mono border-y-2 text-[#000000b0] border-[#0000004b] px-2">
                {heading}
            </h1>
        </div>


    );
};

export default SecTionTitle;