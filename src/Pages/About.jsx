import React from "react";
import about1 from "../assets/about1.png";
import vision from "../assets/vision.jpg";
import { toast } from 'react-toastify';

const About = () => {
  const handleSuccess = () => {
    toast.success('Action was successful!');
  };
  return (
    <section>
      <div className="text-center p-12">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <h1 className="text-2xl pt-5">We Pay, We Secure and We Represent...</h1>
      </div>
      <div className="grid md:grid-cols-2 pt-4">
        <div className="px-4 lg:px-48 ">
          <img
            src={about1}
            alt="About Finance"
            className="rounded-2xl h-64 object-cover"
          />
        </div>
        <div className="p-5">
          <h1 className="text-2xl py-3 font-medium text-[#1e453e]">
            Transforming Payments for Tomorrow
          </h1>
          <p className="font-thin">
            Welcome to Soundga, where innovation meets simplicity in the world
            of payments. We are more than just a payment software company; we
            are your partners in creating seamless, secure, and streamlined
            financial transactions for today and tomorrow.
          </p>
        </div>
      </div>
      <div>
        <h1 className="pt-10 pb-5 text-center text-2xl font-bold">Our Story</h1>
        <p className="text-center px-5 font-thin">
          Soundga was founded with a simple yet powerful vision: to
          revolutionize the way businesses, large and small, manage their
          payments. In a world where digital transactions are the lifeblood of
          commerce, we recognized the need for a smarter, more efficient payment
          solution. Our journey began with the mission to empower businesses
          with cutting-edge technology, and we've never looked back.
        </p>
      </div>
      <div className="grid md:grid-cols-2 py-20">
        <div className="p-5">
          <h1 className="text-2xl font-medium text-[#1e453e] text-center">
            Our Vision
          </h1>
          <p className="font-thin">
            At Soundga, we envision a future where payments are effortless,
            secure, and empowering for all businesses. Our goal is to continue
            pushing the boundaries of what's possible in the world of digital
            finance, so you can focus on what truly matters - growing your
            business. Join us in this exciting journey toward a brighter, more
            efficient, and more connected payment landscape. Soundga is not just
            software; it's a promise of a better tomorrow.
          </p>
        </div>
        <div className="px-4 lg:px-48 pt-6">
          <img
            src={vision}
            alt="Our vision"
            className="rounded-xl h-64 object-cover"
          />
        </div>
      </div>
      <div>
        <h1 className="pt-10 pb-5 text-center text-2xl font-bold">
          Get Started Today
        </h1>
        <p className="text-center px-5 font-thin bg">
          Ready to experience the future of payments with Soundga? Contact us
          today to explore how our software can transform the way you do
          business. Welcome to a world of seamless, secure, and sound financial
          transactions. Welcome to Soundga.
        </p>
      </div>
      <div>
      <button onClick={handleSuccess} className="bg-lime-600 rounded m-5 p-3">Show Success Toast</button>
    </div>
    </section>
  );
};

export default About;
