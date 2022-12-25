import React from "react";
import { coolvetica, comfortaa } from "../utility/fonts";

const Logo = () => {
  return (
    <a>
      <h4 className={`relative text-2xl leading-none ${coolvetica.className}`}>
        Bubble of Happiness{"  "}
        <span
          style={{ transform: "translateX(6px)translateY(4px)" }}
          className="absolute text-xs"
        >
          🇺🇦
        </span>
      </h4>
    </a>
  );
};

export default Logo;
