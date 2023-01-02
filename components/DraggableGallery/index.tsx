import Image from "next/image";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { inter, coolvetica } from "../../utility/fonts";
import React, { useState, useEffect, memo } from "react";
import GalleryProduct from "./GalleryProduct";

const productGalleryData = [
  {
    productName: "Ukrainietiška kosmetika",
    productBrand: "Naughty",
    imageUrl:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2786&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Odos priežiūra",
    productBrand: "Magritte",
    imageUrl:
      "https://images.unsplash.com/photo-1617030557331-75cb865d9d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Pats geriausias",
    productBrand: "Bútelis",
    imageUrl:
      "https://images.unsplash.com/photo-1620917670397-dc7bc45eeda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2501&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Kosmetika",
    productBrand: "Lillé",
    imageUrl:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
    productPrice: "16.99",
  },

  {
    productName: "Jūsų Jaukumui",
    productBrand: "Namai",
    imageUrl:
      "https://images.unsplash.com/photo-1655570313279-a50124d29924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2619&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Produktas",
    productBrand: "Švelnumas",
    imageUrl:
      "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg",
    productPrice: "16.99",
  },
  {
    productName: "Produktas",
    productBrand: "Curology",
    imageUrl:
      "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Essencials",
    productBrand: "Narciso",
    imageUrl:
      "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productPrice: "16.99",
  },
];

const DraggableGallery = () => {
  //
  const [loaded, setLoaded] = useState(false);

  //
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  //

  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  //
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      style={{ height: "calc(100vh - 172px)" }}
      className="relative max-h-[1000px] "
    >
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 -z-10 h-full w-full bg-red-300 object-cover "
        id="myVideo"
      >
        <source src="/background2.mp4" type="video/mp4" />
      </video>
      <div className="w-ful absolute inset-0 -z-10 h-full bg-gradient-to-r from-[#CDC2B6]  to-[#D4CCC3] opacity-90 backdrop-contrast-100" />

      <div className="pointer-events-none absolute inset-0 z-20 flex h-full w-full items-center justify-center">
        <h2
          className={`text-center text-[50px] leading-tight text-white ${coolvetica.className}`}
        >
          <b></b>
        </h2>
      </div>
      <div
        className="relative flex h-full overflow-x-hidden overflow-x-scroll p-14 active:cursor-grabbing"
        {...events}
        ref={ref} // add reference and events to the wrapping div
      >
        {/* <div

          className={`absolute inset-0 z-50 flex h-full w-full flex-1 flex-row p-14 `}
        > */}
        {productGalleryData.map(
          (
            {
              productName,
              productPrice,
              imageUrl,
              productBrand,
            }: FancyProductProps,
            index
          ) => (
            <GalleryProduct
              key={index}
              productName={productName}
              imageUrl={imageUrl}
              productPrice={productPrice}
              productBrand={productBrand}
              second={index % 2 === 0}
              scrollPosition={scrollPosition}
              loaded={loaded}
            />
          )
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default DraggableGallery;
