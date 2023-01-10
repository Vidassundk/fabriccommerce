import Image from "next/image";
import React from "react";
import { inter, coolvetica } from "../utility/fonts";

import deliveryMan from "../public/images/gay.png";
import happyWoman from "../public/images/happyWoman.png";
import customerSupport from "../public/images/customersupport.png";

const data = [
  {
    title: "Greitas Omnivia pristatymas visoje Lietuvoje",
    image: deliveryMan,
    imageText: "",
    backgroundColor: "#8D818C",
    buttonText: "Užsiregistruoti",
    buttonLink: "/",
    rightSpacing: "1px",
  },
  {
    title: "Greitas ir patogus pinigų grąžinimas",
    image: happyWoman,
    imageText: "",
    backgroundColor: "#E3BAC6",
    //good pink
    buttonText: "Grąžinimo informacija",
    buttonLink: "/",
    rightSpacing: "0%",
  },
  {
    title: "Padėsime pristatymo ir kitais klausimais",
    image: happyWoman,
    imageText: "",
    backgroundColor: "#D0D5DC",
    buttonText: "Susisiekti",
    buttonLink: "/",
    rightSpacing: 0,
    classes: "lg:row-span-2 lg:h-auto",
  },
  {
    title: "Aukojame labdaros organizacijoms",
    image: happyWoman,
    imageText: "",
    backgroundColor: "#7CB69E",
    rightSpacing: 0,
  },
];

const BigFeaturesBlock = () => {
  return (
    <div className="container mx-auto my-[60px] grid grid-cols-1 gap-10 pb-20 md:pb-24 lg:grid-cols-2 lg:pb-32">
      <div className="mx-auto px-10 text-center lg:mx-0 lg:text-left">
        <div className="pb-4 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3">
          <h1
            className={`font-butler lg:text-4.5xl text-3xl text-secondary md:text-4xl ${coolvetica.className}`}
          >
            Bubble of Happiness
          </h1>
          <p
            className={`font-hk pt-4 text-lg text-secondary-lighter ${inter.className}`}
          >
            Pasirinkite sveikatą - pasirinkite mūsų organines priemones.
          </p>
        </div>
      </div>

      {data.map(
        (
          {
            title,
            image,
            imageText,
            backgroundColor,
            buttonText,
            buttonLink,
            rightSpacing,
            classes,
          },
          index
        ) => (
          <div
            key={index}
            className={`group relative h-56 cursor-pointer overflow-hidden rounded-xl bg-[${backgroundColor}] sm:h-80 sm:bg-center ${
              classes && classes
            }`}
          >
            <div
              className={`absolute right-[${
                rightSpacing ? rightSpacing : 0
              }] top-[-10%] bottom-[-10%] w-[50%] transition-all duration-300 ease-out group-hover:scale-[1.03]`}
            >
              <Image
                alt={imageText}
                src={image}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
              <h3
                className={`text-xl font-normal text-white sm:text-2xl ${inter.className}`}
              >
                {title}
              </h3>
              {buttonLink && buttonText && (
                <a
                  href={buttonLink}
                  className="group flex items-center pt-[30px] text-primary"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p
                    className={`-mt-1 flex h-8 items-center pl-3 leading-none text-white transition-colors group-hover:text-white sm:pl-5 sm:text-lg ${inter.className}`}
                  >
                    {buttonText}
                  </p>
                </a>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BigFeaturesBlock;
