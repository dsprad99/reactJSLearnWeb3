import React from "react";
import { useState } from 'react';



export const CarouselItem = ({ item, width }) => {
    return (
      <div className="carousel-item" style={{ width: width }}>
        <div></div>
        {/*title for each section in our home page going through the carousel*/}
        <div className="carousel-title">{item.title}</div>
        
        {/*image for each section in our home page going through the carousel*/}
        <img className="carousel-img" src={item.icon} />  
      </div>
    );
};
