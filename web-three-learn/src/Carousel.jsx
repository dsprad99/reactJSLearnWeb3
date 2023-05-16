import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import Quiz from "./quiz";

export const Carousel = () => {

  //our active index to map through the items array to 0
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Learn Web3",
      icon: require("./img/web3.jpg"),
    },
    {
      title: "Learn Blockchain",
      icon: require("./img/blockchain.jpg"),
    },
    {
      title: "Learn Crypto",
      icon: require("./img/cryptocurrency.png"),
    },
  ];

  //will update our index everytime it is called
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const [show, setShow] = useState(true)

  //if show is equal to true, our intital value then 
  //we will open up the main menu
  if (show == true) {
      return (
      <div className="carousel">
          <button className="carousel-button-two">

        {/*if this button is clicked then show will be set false and will not show the main menu
        also allowing for our quiz component to be shown*/}
        <button onClick={() => setShow(!show)} className="carousel-button">
        <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
          {items.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
          })}
            </div>
          </button>
    </button>
      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
              <span class="material-symbols-outlined">arrow_forward_ios</span>
          </button>

        </div>
      </div>
  );
  }

//if show is equal to false then the quiz will show up
  if (show == false){
    return (
      <Quiz/>
    );
  }
  
};