import React, { ReactNode } from "react";

interface Props {
  href?: string;
  icon?: ReactNode | Element;
}

const IconButton = ({ icon, href }: Props) => {
  if (icon) {
    return (
      <a
        href={href}
        className="o mr-3 flex cursor-pointer items-center rounded-full bg-white p-3 transition-all hover:bg-gray-50 "
      >
        {icon}
      </a>
    );
  }
};

export default IconButton;
