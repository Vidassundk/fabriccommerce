import React, { ReactNode } from "react";

interface Props {
  href?: string;
  icon?: ReactNode | Element;
  classes?: string;
}

const IconButton = ({ icon, href, classes }: Props) => {
  if (icon) {
    return (
      <a
        href={href}
        className={`bg-transperant flex cursor-pointer items-center rounded-full p-2 transition-all hover:bg-gray-100 ${classes}`}
      >
        {icon}
      </a>
    );
  }
};

export default IconButton;
