import React from "react";
import {
  AiFillSketchCircle,
  AiFillCodeSandboxCircle,
  AiFillMacCommand,
} from "react-icons/ai";

const Section = () => {
  return (
    <div className="bg-white lg:px-10">
      <div className="pt-14 ">
        <h1 className="font-semibold text-3xl p-6 md:text-5xl lg:px-80 md:text-center">
          The Most Powerful & Easy-To-Use Payment Software.
        </h1>
      </div>
      <div className="flex">
        <div className="p-8 md:p-14 border-r-2">
          <AiFillSketchCircle size={30} />
          <h1 className=" font-semibold text-xl md:text-3xl">Individual</h1>
          <p className="text-xs md:text-sm font-light">
            Start collecting payments from clients all over the world. Create a
            business online in no time.
          </p>
        </div>
        <div className="p-8 md:p-14 border-r-2">
          <AiFillCodeSandboxCircle size={30} />
          <h1 className=" font-semibold text-xl md:text-3xl">Agency</h1>
          <p className="text-xs md:text-sm font-light">
            Create and share professional invoices for your customer. Send
            reminders for payment easily
          </p>
        </div>
        <div className="p-8 md:p-14 ">
          <AiFillMacCommand size={30} />
          <h1 className=" font-semibold text-xl md:text-3xl">Enterprise</h1>
          <p className="text-xs md:text-sm font-light">
            Start collecting payments from clients all over the world. Create a
            business online in no time.
          </p>
        </div>
      </div>
     
    </div>
    
  );
};

export default Section;
