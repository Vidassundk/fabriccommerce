import Image from "next/image";
import React from "react";
import Button from "./Button";
import HeaderSlider from "./HeaderSlider";
import PostMachineMap from "./PostMachineMap";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import DraggableGallery from "./DraggableGallery";
function Landing() {
  return (
    <>
      <DraggableGallery />
    </>
  );
}

export default Landing;
