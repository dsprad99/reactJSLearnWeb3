import React from "react";
import { useState } from 'react';



export const CarouselItem = ({ item, width }) => {
    return (
      <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <div className="carousel-title">{item.title}</div>
          <img className="carousel-img" src={item.icon} />  
      </div>
    );
};
