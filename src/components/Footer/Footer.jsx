import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import Carousel from "../Carousel/Carousel";

const Footer = () => {
  return (
    <div className="text-white  ">
      <div className="p-12  md:ml-11 lg:ml-36  mt-[-7rem] lg:mt-[-16rem] ">
        <Carousel />
      </div>
      <div className="max-w-[1240px] mx-24  md:mx-0 grid md:grid-cols-3 lg:grid-cols-4 gap-12 md:pl-2 lg:pb-14 text-left lg:ml-32">
        <div className="p-1">
          <h3 className="text-lg">Solutions</h3>
          <p className="footerp">Marketing</p>
          <p className="footerp">Analytics</p>
          <p className="footerp">Commerce</p>
          <p className="footerp">Insights</p>
        </div>
        <div className="p-1">
          <h3 className="text-lg">Supports</h3>
          <p className="footerp">Pricing</p>
          <p className="footerp">Documentation</p>
          <p className="footerp">Guides</p>
          <p className="footerp">API Status</p>
        </div>
        <div className="p-1">
          <h3 className="text-lg">Company</h3>
          <p className="footerp">About</p>
          <p className="footerp">Blog</p>
          <p className="footerp">Jobs</p>
          <p className="footerp">Partners</p>
        </div>
        <div className="p-1">
          <h3 className="text-lg">Legal</h3>
          <p className="footerp">Claim</p>
          <p className="footerp">Privacy</p>
          <p className="footerp">Terms</p>
        </div>
        <div className="mx-[-10rem] md:mx-1 p-1 lg:w-68 subscribe">
          <h3 className="text-lg">Subscribe to our newsletter</h3>
          <p className="text-sm font-light pb-4 footerp">
            The latest news article and resources sent to your inbox
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="border p-2 mr-[-6rem] rounded-full w-64"
          />
          <button className=" font-bold py-2 px-4 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="flex py-5 md:mx-14 lg:mx-48 justify-between">
        <h1 className="font-bold px-3 mr-2  text-2xl">SOUNDGA</h1>
        <p className="font-light mt-2 text-xs ">@2023 Nancy All Rights Reserved</p>
        <div className="flex mt-2 space-x-1 md:space-x-3">
          <FaTwitter size={20} /> 
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <AiFillGithub size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
