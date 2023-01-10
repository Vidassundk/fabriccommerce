import React from "react";
import { inter } from "../utility/fonts";

const DropDownSection = ({ sectionTitle, sectionItems }: DropDownProps) => {
  return (
    <div className="relative z-20  py-8 px-8">
      <h4
        className={`mb-2 text-base text-secondary ${inter.className} font-normal`}
      >
        {sectionTitle}
      </h4>
      <ul>
        {sectionItems.map((item, index) => (
          <DropDownLink key={index} link={item.link} linkName={item.linkName} />
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

const NavDropdown = ({
  sectionName,
  sectionOptions,
  sectionImage,
  onMouseEnter,
  onMouseLeave,
  activeTab = false,
  myRef,
}: Menu) => {
  // const [activeTab, setActiveTab] = useState(false);

  return (
    <li
      ref={myRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden cursor-pointer  lg:block"
    >
      <div className={`flex items-center`}>
        <span
          className={`cursor-pointer px-2 text-sm font-bold ${inter.className} transition-all`}
        >
          {sectionName}
        </span>
      </div>

      {sectionOptions && (
        <div
          className={`  ${
            activeTab
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } absolute top-[80px] left-0 right-0 z-50 mx-auto w-full pt-10 transition-all`}
        >
          <div className="relative flex h-[500px] overflow-hidden rounded-lg bg-white shadow-md transition-all">
            {sectionOptions?.map(({ sectionTitle, sectionItems }, index) => (
              <DropDownSection
                key={index}
                sectionTitle={sectionTitle}
                sectionItems={sectionItems}
              />
            ))}
            {sectionImage && (
              <div className="flex-1 py-8 px-8 ">
                <div className="relative h-full w-full  overflow-hidden rounded-lg bg-red-400 ">
                  <div
                    className="absolute inset-0 z-0 w-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${sectionImage})`,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
