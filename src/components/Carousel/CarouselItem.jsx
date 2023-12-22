import React from 'react';
import './Carousel.css';
const CarouselItem = ({ item , width}) => {
  return (
   
    <div className="carousel-item" style={{ width: width }}>
    <div></div>
      <img className="carousel-img" src={item.image} alt='testimonial' />
    <div className="carousel-item-text">
      "{item.description}" 
      <div className='pt-10'>{item.name} <br/>
      {item.title}
      </div> 
      </div>
    
  </div>
  
  );
};

export default CarouselItem;
