import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import { inter, coolvetica } from "../../utility/fonts";

interface FancyProductProps {
  imageUrl: string;
  productName: string;
  productBrand: string;
  productPrice: string;
  second?: boolean;
  invisible?: boolean;
  scrollPosition: number;
  loaded?: boolean;
  third?: boolean;
}

const GalleryProduct = ({
  imageUrl,
  productName,
  productBrand,
  second,
  invisible,
  scrollPosition,
  loaded,
}: FancyProductProps) => {
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const hover = (
    <div className="group absolute inset-0 inline-block   ">
      <div className="z-1 absolute inset-0 bg-[#4C413B] opacity-0 transition-opacity group-hover:opacity-80" />
      <div className="z-1 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
        <a
          href="/cart"
          className="mr-3 flex items-center rounded-full bg-white p-3 text-[#4C413B] transition-all hover:bg-[#4C413B] hover:text-white"
        >
          <svg
            className=""
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
              fill="currentColor"
            />
            <path
              d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
              fill="currentColor"
            />
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="currentColor"
            />
          </svg>
        </a>
        {/* <a
            href="/cart"
            className="mr-3 flex items-center rounded-full bg-white p-3 text-black transition-all hover:bg-black hover:text-white"
          ></a> */}
        <a
          href="/cart"
          className="mr-3 flex items-center rounded-full bg-white p-3 text-[#4C413B] transition-all hover:bg-[#4C413B] hover:text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
  const [leftRandomImageHeight] = useState(getRandomArbitrary(74, 100));
  const [RightRandomImageHeight] = useState(getRandomArbitrary(70, 84));

  const [randomSpacing] = useState(
    second ? getRandomArbitrary(150, 250) : getRandomArbitrary(70, 140)
    // second ? getRandomArbitrary(300, 450) : getRandomArbitrary(110, 220)
  );

  const biggerfirstImage = leftRandomImageHeight > 80;

  return (
    <div
      style={{
        marginRight: randomSpacing + "px",
        opacity: invisible ? 0 : 1,

        transform: loaded
          ? `translateX(-${scrollPosition / 12}px)`
          : `translateX(${100}px)`,
      }}
      className={`splide__slide flex transition-all duration-500 ease-out ${
        !second
          ? "z-10 flex-col"
          : biggerfirstImage
          ? "z-20 flex-row"
          : "z-20 flex-col-reverse"
      } `}
    >
      <div
        style={{
          marginTop: second ? (biggerfirstImage ? "auto" : "none") : "none",
          height: !second
            ? RightRandomImageHeight + "%"
            : leftRandomImageHeight + "%",
        }}
        className="inline-block flex rounded"
      >
        <div className="justify-bottom relative z-30 bg-gray-100 ">
          <img
            src={imageUrl}
            alt="product image"
            className="h-full object-contain "
          />
          {hover}
        </div>
      </div>
      <div
        className={`flex  ${
          !second
            ? "h-[20%] flex-col justify-between pt-6"
            : biggerfirstImage
            ? "h-full flex-col justify-end pl-6"
            : "h-[20%] flex-col-reverse pb-4 "
        }  `}
      >
        <div>
          <h4
            className={`text-[13px] uppercase tracking-wider text-black opacity-80 ${inter.className}`}
          >
            {productName}
          </h4>
          <h2
            className={` -ml-[1px] text-[44px] leading-tight text-black opacity-80 ${
              second && biggerfirstImage && "-mb-[12px]"
            }`}
          >
            <b>{productBrand}</b>
          </h2>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default memo(GalleryProduct);
