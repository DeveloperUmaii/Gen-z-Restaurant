import { FaFacebook ,FaYoutube ,FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-full flex  sm:footer-horizontal text-neutral-content ">
        <div className="w-6/12 bg-[#1F2937] min-h-full flex py-8">
          <div className="w-2/6"></div>
          <div className="w-4/6 flex flex-col justify-center items-center">
            <div className="">
              <h2 className="">CONTACT US</h2>
            </div>
            <div className="">
              <h1 className="text-center">
                Orongobad, Betila-Mitora, Manikganj-SADAR
              </h1>
              <h1 className="text-center">+880 1635-893037</h1>
              <h1 className="text-center">Sun - Wed: 15:00 - 22:00</h1>
              <h1 className="text-center">Thu - Sat: 10:00 - 23:00</h1>
            </div>
          </div>
        </div>

        <div className="w-6/12  bg-[#111827] min-h-full flex">
          <div className="w-4/6  flex flex-col justify-center items-center">
            <h6 className="footer-title mt-1">Follow US</h6>
            <h6 className="pb-2 ">Join us social media</h6>
            <div className="grid grid-flow-col gap-4 py-2.5">
              <a href="https://www.facebook.com/mdasiknlfasik">
                <FaFacebook size={23} className="text-blue-600" />
              </a>
              <a href="https://www.youtube.com/" >
              <FaYoutube  size={23} className="text-red-600"/>
              </a>
              <a href="https://wa.me/8801635893037?text=Hello%20Asik%20From%20web%20" >
              <FaWhatsapp size={23} className="text-green-700"/>
              </a>
            </div>
          </div>
          <div className="w-2/6"></div>
        </div>
      </footer>
      <footer className="bg-[#171717] footer sm:footer-horizontal footer-center text-base-content p-1">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-bold text-lg"> Gen - <span className="font-semibold text-[#ff4912]">Z</span> </span> Resturant
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
