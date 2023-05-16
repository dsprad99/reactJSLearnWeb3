import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
export const Carousel = () => {
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
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const [show, setShow] = useState(true)
  
  if(show == true){
    return (
      <div className="carousel">
        <button onClick={sayHello} className="carousel-button-two">
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

  function sayHello() {
    alert('Hello!');
  }

  
};