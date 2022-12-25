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
    backgroundColor: "#E9D2C0",
    message: "YAKA - ukrainietiška kosmetika",
    buttonMessage: "Produktai",
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
  {
    img: "https://i.ibb.co/JQgYBMr/Pngtree-tube-vector-mock-up-empty-5205366.png",
    alt: "img2",
    backgroundColor: "#EDB458",
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
          className={`-z-4 absolute  top-0 object-contain py-[100px] mix-blend-multiply `}
        />

        {/* <div className="z-2 container absolute  mx-auto flex flex-col py-48 px-5">
          <h3
            className={`${coolvetica.className} mb-[40px] text-4xl text-white sm:text-4xl md:text-5xl lg:text-6xl`}
          >
            {message}
          </h3>

        </div> */}
      </div>
    </SplideSlide>
  );
};

const HeaderSlider = () => {
  const height = "calc(100vh - 172px);";

  return (
    <div className="bg-gray-50active:cursor-grabbing  bg-gray-5 max-h-[1000px] cursor-grab overflow-hidden">
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
              height={height}
            />
          )
        )}
      </Splide>
    </div>
  );
};

export default HeaderSlider;
