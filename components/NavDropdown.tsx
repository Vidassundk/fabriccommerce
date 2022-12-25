import React from "react";
import { inter } from "../utility/fonts";

const DropDownSection = ({ sectionTitle, sectionItems }: DropDownProps) => {
  return (
    <div className="relative z-20 flex-1 py-8 pl-8">
      <h4
        className={`mb-2 text-base text-secondary ${inter.className} font-normal`}
      >
        {sectionTitle}
      </h4>
      <ul>
        {sectionItems.map((item) => (
          <DropDownLink link={item.link} linkName={item.linkName} />
        ))}
      </ul>
    </div>
  );
};

const DropDownLink = ({ link = "/", linkName }: DropDownLink) => {
  return (
    <li>
      <a
        href={link}
        className="border-b border-transparent text-sm leading-loose text-secondary-lighter hover:border-secondary-lighter"
      >
        {linkName}
      </a>
    </li>
  );
};

const NavDropdown = ({ sectionName, sectionOptions, sectionImage }: Menu) => {
  return (
    <li className="group mr-10 hidden cursor-pointer lg:block">
      <div className="flex items-center border-b-[1.9px] border-white pb-1 transition-colors group-hover:border-black">
        <span
          className={`cursor-pointer px-2 text-sm ${inter.className} transition-all`}
        >
          {sectionName}
        </span>
        <i className="px-2 pl-2 text-secondary transition-colors group-hover:text-black">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
              fill="currentColor"
            />
          </svg>
        </i>
      </div>

      {sectionOptions && (
        <div
          className={`pointer-events-none absolute top-0 left-0 right-0 z-50 mx-auto mt-40 ${
            sectionOptions?.length > 2 ? "w-2/3" : "w-1/2"
          } pt-10 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100`}
        >
          <div className="relative flex min-h-[250px] overflow-hidden rounded-lg bg-white shadow-md transition-all">
            {sectionOptions?.map(({ sectionTitle, sectionItems }, index) => (
              <DropDownSection
                key={index}
                sectionTitle={sectionTitle}
                sectionItems={sectionItems}
              />
            ))}
            {sectionImage && (
              <div className="relative flex-1 bg-red-400">
                <div
                  className="absolute inset-0 z-0 w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${sectionImage})`,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
