import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import pic5 from "../assets/pic5.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import pic9 from "../assets/pic9.png";


const Hero = () => {
  return (
    <div className="text-white">
      <div className="mx-3 pt-6 max-w-7xl lg:pt-10 lg:max-w-none lg:px-20">
        <h1 className="text-5xl font-display tracking-wide font-semibold px-2 text-white md:text-6xl md:px-10  lg:text-7xl ">
          Every kind of analytics to stand out financially genuis
        </h1>
      </div>
      
        <div className="flex pt-14 mx-5 max-w-md lg:max-w-none lg:pl-28 lg:mx-0">
          <div className="flex-auto w-64 px-2 md:px-8 lg:px-0">
            <p className="text-stone-300 lg:pt-10">
              Create and share preofessional invoices for <br /> your customers.
              Send reminders
              for payment easily.
            </p>
            <div className="flex mt-10 ">
              <button className=" h-12 text-xs rounded-2xl font-bold py-2 px-4 lg:rounded-full mr-4">
                Get Started
              </button>
              <button className=" flex text-sm bg-[#1e453e] text-white font-bold py-2 px-4 rounded-full">
                <AiOutlinePlayCircle size={20} className="mr-2 mt-2 lg:mt-0" /> WATCH VIDEO
              </button>
            </div>
            <div className="flex pt-10 space-x-10">
            <img src={pic7} alt="" style={{ width: "100px", height: "70px" }} />
            <img src={pic8} alt="" style={{ width: "100px", height: "70px" }} />
           <img src={pic9} alt="" style={{ width: "100px", height: "70px" }} />
            </div>
          </div>
          <div className="flex-auto w-60 px-4 md:pr-0 md:ml-0">
            <img src={pic5} alt="" />
          </div>
        
      </div>

      <div className="mt-20">
        <div className="flex  bg-[#e9f6f9] text-black justify-center lg:gap-44">
          <div className="p-8 ml-7 md:p-14">
            <h1 className=" font-semibold text-4xl md:text-6xl">85+</h1>
            <p className="text-xs md:text-sm font-light">
              Energetic team members
            </p>
          </div>
          <div className="p-8 md:p-14">
            <h1 className=" font-semibold text-4xl md:text-6xl">60k</h1>
            <p className="text-xs md:text-sm font-light">
              Completed and live projects
            </p>
          </div>
          <div className="p-8 mr-5 md:p-14 text">
            <h1 className=" font-semibold text-4xl md:text-6xl">90%</h1>
            <p className="text-xs md:text-sm font-light">
              Client returns after project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
