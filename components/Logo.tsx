import React from "react";
import { coolvetica, comfortaa } from "../utility/fonts";

const Logo = () => {
  return (
    <a>
      <h4
        className={`relative hidden pr-[28px] text-2xl leading-none lg:block ${coolvetica.className}`}
      >
        Bubble of Happiness{"  "}
        <span
          style={{ transform: "translateX(6px)translateY(4px)" }}
          className="absolute text-xs"
        >
          🇺🇦
        </span>
      </h4>
      <h4
        className={`relative block pr-[28px] text-2xl leading-none lg:hidden ${coolvetica.className}`}
      >
        BoH{"  "}
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
