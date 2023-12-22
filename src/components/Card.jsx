import React from "react";
import {
  AiFillCreditCard,
  AiOutlineLineChart,
  AiOutlineWallet,
} from "react-icons/ai";
import Triple from "../assets/Triple.png";
import Driple from "../assets/Driple.png";
import bank from "../assets/bank.png";



const Card = () => {
  return (
    <div className="w-full py-[2rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-10 grid md:grid-cols-2 gap-8 md:px-10 lg:mx-48">
        <div className="w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#e9f6f9]">
          <AiFillCreditCard size={50} />
          <h2 className="text-2xl font-bold text-left py-8">
            Custom design your card, Make it unique
          </h2>
          <p className="font-light">
            Runway protects your money with a world class security system that
            helps detect fraud and prevents hacking
          </p>
          <img className="w-50 mx-auto mt-[3rem]" src={Triple} alt="/" />
        </div>
        <div className="w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#e9f6f9]">
          <AiOutlineLineChart size={50} />
          <h2 className="text-2xl font-bold text-left py-8">
            Financial insights and goals
          </h2>
          <p className="font-light">
            Runway protects your money with a world class security system that
            helps detect fraud and prevents hacking
          </p>
          <img className="w-50 mx-auto mt-[3rem] " src={Driple} alt="/" />
        </div>
      </div>
      <div className="max-w-[1240px] mx-5  grid md:grid-cols-1 gap-8 md:px-16 lg:mx-auto">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#e9f6f9]">
          <div className="flex h-full md:h-80">
            <div>
              <AiOutlineWallet size={50} />
              <h2 className="text-2xl font-bold text-left py-8">
                Free transfer anywhere around the world
              </h2>
              <p className="font-light">
                Runway protects your money with a world class security system
                that helps detect fraud and prevents hacking account with screen lock
              </p>
            </div>
            <div className="pt-16 px-5 w">
            <img className="w-80 mx-auto mt-[1rem] lg:mt-0 lg:w-40" src={bank} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


// import React from "react";
// import { AiFillCreditCard, AiOutlineLineChart, AiOutlineWallet } from "react-icons/ai";
// import Triple from "../assets/Triple.png";
// import Driple from "../assets/Driple.png";
// import bank from "../assets/bank.png";

// const cardsData = [
//   {
//     icon: <AiFillCreditCard size={50} />,
//     title: "Custom design your card, Make it unique",
//     description:
//       "Runway protects your money with a world-class security system that helps detect fraud and prevents hacking",
//     image: Triple,
//   },
//   {
//     icon: <AiOutlineLineChart size={50} />,
//     title: "Financial insights and goals",
//     description:
//       "Runway protects your money with a world-class security system that helps detect fraud and prevents hacking",
//     image: Driple,
//   },
//   {
//     icon: <AiOutlineWallet size={50} />,
//     title: "Free transfer anywhere around the world",
//     description:
//       "Runway protects your money with a world-class security system that helps detect fraud and prevents hacking account with screen lock",
//     image: bank,
//   },
// ];

// const CardItem = ({ icon, title, description, image }) => {
//   return (
//     <div className="w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#e9f6f9]">
//       {icon}
//       <h2 className="text-2xl font-bold text-left py-8">{title}</h2>
//       <p className="font-light">{description}</p>
//       <img className="w-50 mx-auto mt-[3rem]" src={image} alt="/" />
//     </div>
//   );
// };

// const Card = () => {
//   return (
//     <div className="w-full py-[2rem] px-4 bg-white">
//       <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 md:px-28">
//         {cardsData.slice(0, 2).map((card, index) => (
//           <CardItem key={index} {...card} />
//         ))}
//       </div>
//       <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8 md:px-28">
//         {cardsData.slice(2).map((card, index) => (
//           <CardItem key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;
