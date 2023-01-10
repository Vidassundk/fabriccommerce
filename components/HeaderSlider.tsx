import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { comfortaa, coolvetica } from "../utility/fonts";
import Button from "./Button";

interface SlideProps {
  img: string;
  alt: string;
  backgroundColor?: string;
  message?: string;
  buttonMessage?: string;
  buttonLink?: string;
  height: string | number;
}

const slides = [
  {
    img: "https://i.ibb.co/JQgYBMr/Pngtree-tube-vector-mock-up-empty-5205366.png",
    alt: "img1",
    backgroundColor: "#E3BAC6",
    message: "YAKA - ukrainietiška kosmetika",
    buttonMessage: "Produktai",
    buttonLink: "",
  },

  {
    img: "https://i.ibb.co/JQgYBMr/Pngtree-tube-vector-mock-up-empty-5205366.png",
    alt: "img3",
    backgroundColor: "#D0D5DC",
    message: "",
    buttonMessage: "",
    buttonLink: "",
  },
  {
    img: "https://i.ibb.co/JQgYBMr/Pngtree-tube-vector-mock-up-empty-5205366.png",
    alt: "img2",
    backgroundColor: "#7CB69E",
    message: "",
    buttonMessage: "",
    buttonLink: "",
  },

  {
    img: "https://i.ibb.co/JQgYBMr/Pngtree-tube-vector-mock-up-empty-5205366.png",
    alt: "img2",
    backgroundColor: "#EDB458",
    message: "",
    buttonMessage: "",
    buttonLink: "",
  },
  {
    img: "https://i.ibb.co/JQgYBMr/Pngtree-tube-vector-mock-up-empty-5205366.png",
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
  height,
}: SlideProps) => {
  return (
    <SplideSlide>
      <div
        style={{ backgroundColor: backgroundColor, height: height }}
        className={`relative max-h-[1000px] bg-cover bg-left bg-no-repeat sm:bg-center bg-[${backgroundColor}]`}
      >
        <Image
          src={img}
          alt={alt}
          fill
          className={`-z-4 absolute top-0 object-contain py-[200px] mix-blend-multiply `}
        />
      </div>
    </SplideSlide>
  );
};

const HeaderSlider = () => {
  const height = "100vh";
  // const height = "calc(100vh - 172px);";

  return (
    <div className="bg-gray-5 max-h-[1000px] cursor-grab overflow-hidden  bg-gray-50 active:cursor-grabbing">
      <Splide
        aria-label="Slides"
        options={{
          perPage: 1,
          height: height,
          arrows: false,
          snap: false,
        }}
      >
        {slides.map(
          (
            { img, alt, backgroundColor, buttonLink, buttonMessage, message },
            index
          ) => (
            <Slide
              key={index}
              img={img}
              alt={alt}
              backgroundColor={backgroundColor}
              buttonLink={buttonLink}
              buttonMessage={buttonMessage}
              message={message}
              height={height}
            />
          )
        )}
      </Splide>
    </div>
  );
};

export default HeaderSlider;
