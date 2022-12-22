import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { comfortaa } from "../utility/fonts";
import Button from "./Button";

interface SlideProps {
  img: string;
  alt: string;
  backgroundColor?: string;
  message?: string;
  buttonMessage?: string;
  buttonLink?: string;
}

const slides = [
  {
    img: "https://images.unsplash.com/photo-1657299170935-31e068229885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "img1",
    backgroundColor: "#E9D2C0",
    message: "YAKA - ukrainietiška kosmetika",
    buttonMessage: "Produktai",
    buttonLink: "",
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "img2",
    backgroundColor: "#EDB458",
    message: "",
    buttonMessage: "",
    buttonLink: "",
  },
  {
    img: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    alt: "img3",
    backgroundColor: "#57CC99",
    message: "",
    buttonMessage: "",
    buttonLink: "",
  },
];

const Slide = ({
  message,
  buttonLink,
  buttonMessage,
  img,
  alt,
  backgroundColor = "#FFA3A5",
}: SlideProps) => {
  return (
    <SplideSlide>
      <div style={{ backgroundColor: backgroundColor }}>
        <div className="bg-cover bg-left bg-no-repeat sm:bg-center">
          <div className="py-48 px-5 text-center sm:w-5/6 sm:px-10 sm:text-left md:px-12 lg:w-3/4 xl:w-2/3 xl:px-24">
            <h3
              className={`${comfortaa.className} mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
            >
              {message}
            </h3>
            <Button title={buttonMessage as string} />
          </div>
        </div>
        <img
          src={img}
          alt={alt}
          className={`h-full w-full object-cover object-center opacity-0 bg-[${backgroundColor}]`}
        />
      </div>
    </SplideSlide>
  );
};

const HeaderSlider = () => {
  return (
    <div className="container mx-auto mt-10 cursor-grab overflow-hidden rounded-lg bg-gray-50 shadow-md active:cursor-grabbing">
      <Splide
        aria-label="Slides"
        options={{
          perPage: 1,
          height: "600px",
          arrows: false,
        }}
      >
        {slides.map(
          ({
            img,
            alt,
            backgroundColor,
            buttonLink,
            buttonMessage,
            message,
          }) => (
            <Slide
              img={img}
              alt={alt}
              backgroundColor={backgroundColor}
              buttonLink={buttonLink}
              buttonMessage={buttonMessage}
              message={message}
            />
          )
        )}
      </Splide>
    </div>
  );
};

export default HeaderSlider;
