import React, {useState} from 'react';
import CarouselItem from './CarouselItem';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";



const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      name: "James Anderson",
      title: "CEO at Gizot",
      description:"Finance Card has truly transformed the way I handle my money. The convenience of their debit card, coupled with their budgeting tools, has helped me save and budget effectively.",
      image: require("../../assets/pic10.png"),
    },
    {
      name: "James Anderson",
      title: "CEO at Gizot",
      description:"Finance Card has truly transformed the way I handle my money. The convenience of their debit card, coupled with their budgeting tools, has helped me save and budget effectively.",
      image: require("../../assets/pic11.png")
    },
    {
      name: "James Anderson",
      title: "CEO at Gizot",
      description:"Finance Card has truly transformed the way I handle my money. The convenience of their debit card, coupled with their budgeting tools, has helped me save and budget effectively.",
      image: require("../../assets/pic10.png")
    }
  ]

  const updateIndex = (newIndex) => {
    if( newIndex < 0 ) {
      newIndex = 0;
    }else if (newIndex >= items.length){
      newIndex = items.length - 1
    }
    setActiveIndex(newIndex);
  };


  return(
    <div className='carousel'>
      <div className='inner'
      style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => {
          return (<CarouselItem key={index} item={item}/>);
        }
        )}
      
      </div>

      <div className='carousel-buttons space-x-3'>
        <button onClick={()=>{
          updateIndex(activeIndex - 1);
        }}
         className='button-arrow'><IoIosArrowBack size={30} /></button>
        <button onClick={()=>{
          updateIndex(activeIndex + 1)
        }} className='button-arrow'><IoIosArrowForward size={30} /></button>
      </div>
    </div>
  )
};

export default Carousel;
