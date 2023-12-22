import React from "react";
import { AiFillSketchCircle, AiFillCodeSandboxCircle, AiFillMacCommand } from "react-icons/ai";

const Card = ({ icon, title, description }) => (
  <div className="p-8 md:p-14 border-1-2 card  ">
    {icon}
    <h1 className="font-semibold text-xl md:text-3xl">{title}</h1>
    <p className="text-xs md:text-sm font-light">{description}</p>
  </div>
);

const Section = () => {
  const cardsData = [
    {
      icon: <AiFillSketchCircle size={30} />,
      title: "Individual",
      description: "Start collecting payments from clients all over the world. Create a business online in no time.",
    },
    {
      icon: <AiFillCodeSandboxCircle size={30} />,
      title: "Agency",
      description: "Create and share professional invoices for your customer. Send reminders for payment easily.",
    },
    {
      icon: <AiFillMacCommand size={30} />,
      title: "Enterprise",
      description: "Start collecting payments from clients all over the world. Create a business online in no time.",
    },
  ];

  return (
    <div className="bg-white lg:px-5">
      <div className="pt-14">
        <h1 className="font-semibold text-3xl p-6 md:text-5xl lg:px-80 md:text-center">
          The Most Powerful & Easy-To-Use Payment Software.
        </h1>
      </div>
      <div className="md:flex">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Section;
