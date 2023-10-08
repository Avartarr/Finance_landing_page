import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="mx-auto max-w-2xl lg:max-w-none lg:pl-48">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl px-10 font-medium tracking-tight text-white [text-wrap:balance] sm:text-7xl ">
            Every kind of analytics to stand out financially <br /> genuis
          </h1>
        </div>
      </div>
      <div className="flex pt-16 mx-5 max-w-md lg:max-w-none lg:pl-48 lg:mx-0">
        <div class="flex-auto w-64 px-6 md:px-24 lg:px-10">
          <p>
            Create and share preofessional invoices for <br /> your customers.
            Send reminders
            <br /> for payment easily.
          </p>
        </div>
      </div>
      <div className="flex justify-left mt-10 mx-10 md:px-16 lg:px-20 lg:mx-36">
        <button className="bg-[#98fb98] text-black font-bold py-2 px-4 rounded-full mr-4">
          Get Started
        </button>
        <button className=" flex bg-[#1e453e] text-white font-bold py-2 px-4 rounded-full">
          <AiOutlinePlayCircle className="mr-2 mt-1" /> WATCH VIDEO
        </button>
      </div>
      <div className="mt-20">
        <div className="flex bg-[#e9f6f9] text-black justify-center lg:gap-44">
          <div className="p-8 md:p-14">
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
          <div className="p-8 md:p-14 text">
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
