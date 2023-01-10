import Image from "next/image";
import React from "react";
import Button from "./Button";
import HeaderSlider from "./HeaderSlider";
import PostMachineMap from "./PostMachineMap";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import DraggableGallery from "./DraggableGallery";
import MiniFeaturesBlock from "./MiniFeaturesBlock";
import BigFeaturesBlock from "./BigFeaturesBlock";
import { Head } from "next/document";

function Landing() {
  return (
    <>
      {/* <DraggableGallery /> */}
      <HeaderSlider />
      {/* <MiniFeaturesBlock /> */}
      {/* <BigFeaturesBlock /> */}
    </>
  );
}

export default Landing;
