import React, { useState, useRef, createRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import IconButton from "./IconButton";

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

const data = [
  {
    sectionName: "Veidui",
    sectionImage:
      "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    sectionOptions: [
      {
        sectionTitle: "Moterims",
        sectionItems: [
          {
            linkName: "Veido kremai",
          },
          {
            linkName: "Serumai",
          },
          {
            linkName: "Veido šveitikliai",
          },
          {
            linkName: "Silikoninės kempinėlės",
          },
          {
            linkName: "Veido masažuoklės",
          },
          {
            linkName: "Lūpų balzamai",
          },
          {
            linkName: "Lūdažiai",
          },
        ],
      },
      {
        sectionTitle: "Vyrams",
        sectionItems: [
          {
            linkName: "Veido kremai",
          },
          {
            linkName: "Po-skutimosi kremai",
          },
          {
            linkName: "Skutimosi putos",
          },
        ],
      },
      {
        sectionTitle: "Vaikams",
        sectionItems: [
          {
            linkName: "Vaikiški šampūnai",
          },
        ],
      },
    ],
  },
  {
    sectionName: "Kūnui",
    sectionImage:
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    sectionOptions: [
      {
        sectionTitle: "Moterims",
        sectionItems: [
          {
            linkName: "Pieneliai",
          },
          {
            linkName: "Kremai",
          },
          {
            linkName: "Aliejai",
          },
          {
            linkName: "Kūno šveitikliai",
          },
          {
            linkName: "Muilai",
          },
          {
            linkName: "Rankų kremai",
          },
          {
            linkName: "Dušo želė ir putos",
          },
        ],
      },
      {
        sectionTitle: "Vyrams",
        sectionItems: [
          {
            linkName: "Kremai",
          },
          {
            linkName: "Rankų kremai",
          },
          {
            linkName: "Dušo želė",
          },
        ],
      },
      {
        sectionTitle: "Unisex",
        sectionItems: [
          {
            linkName: "Aliejai",
          },
          {
            linkName: "Kūno šveitikliai",
          },
          {
            linkName: "Muilai",
          },

          {
            linkName: "Dušo želė ir putos",
          },
        ],
      },
      {
        sectionTitle: "Vaikams",
        sectionItems: [
          {
            linkName: "Dušo želė",
          },
          {
            linkName: "Vonios putos",
          },
        ],
      },
    ],
  },
  {
    sectionName: "Plaukams",
    sectionImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    sectionOptions: [
      {
        sectionTitle: "Moterims",
        sectionItems: [
          {
            linkName: "Śampūnai",
          },
          {
            linkName: "Kondicionieriai",
          },
          {
            linkName: "Plaukų kaukės",
          },
          {
            linkName: "Šukos ir šepetėliai",
          },
        ],
      },
      {
        sectionTitle: "Vyrams",
        sectionItems: [
          {
            linkName: "Śampūnai",
          },
          {
            linkName: "Kondicionieriai",
          },
          {
            linkName: "Plaukų kaukės",
          },
        ],
      },
      {
        sectionTitle: "Unisex",
        sectionItems: [
          {
            linkName: "Śampūnai",
          },
          {
            linkName: "Kondicionieriai",
          },
          {
            linkName: "Plaukų kaukės",
          },
          {
            linkName: "Šukos ir šepetėliai",
          },
        ],
      },
      {
        sectionTitle: "Vaikams",
        sectionItems: [
          {
            linkName: "Vaikiški šampūnai",
          },
          {
            linkName: "Kondicionieriai",
          },
        ],
      },
    ],
  },
  {
    sectionName: "Namams",
    sectionImage:
      "https://images.unsplash.com/photo-1620733723429-0025a5c38b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    sectionOptions: [
      {
        sectionTitle: "Kvapai",
        sectionItems: [
          {
            linkName: "Namų kvapai",
          },
          {
            linkName: "Žvakės",
          },
        ],
      },
    ],
  },
];

const SubNav = () => {
  const triangleWidth = 30;
  const subNavGap = 10;

  const myRefs = useRef([]);
  myRefs.current = data.map((element, i) => myRefs.current[i] ?? createRef());

  useEffect(() => {
    if (myRefs?.current?.length) {
      const newArrayOfWidths = myRefs.current.map(
        (item) => item?.current.offsetWidth
      );
      if (newArrayOfWidths[0] !== 0) {
        setArrayOfWidths(newArrayOfWidths);
      }
    }
  }, [myRefs]);

  const [activeTab, setActiveTab] = useState(0);
  const [arrayOfWidths, setArrayOfWidths] = useState([]);
  const [triangleDistance, setTriangleDistance] = useState(0);
  // console.log(triangleDistance);
  // console.log(arrayOfWidths);

  useEffect(() => {
    if (activeTab > 0) {
      const previousSections = arrayOfWidths.slice(0, activeTab - 1);
      const sum = previousSections.reduce((partialSum, a) => partialSum + a, 0);
      setTriangleDistance(
        sum +
          subNavGap * (activeTab - 1) +
          (arrayOfWidths[activeTab - 1] / 2 - triangleWidth / 2)
      );
    }
  }, [activeTab]);

  const mouseEnterHandler = (number: number) => {
    setActiveTab(number);
  };
  const mouseLeaveHandler = () => {
    setActiveTab(0);
  };

  const triangleSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={triangleWidth + "px"}
      height="30px"
      viewBox="0 0 1280.000000 640.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M3198 3205 c-1759 -1756 -3198 -3196 -3198 -3199 0 -3 2880 -6 6400 -6 3520 0 6400 3 6400 7 0 7 -6388 6387 -6399 6390 -3 1 -1445 -1435 -3203 -3192z" />
      </g>
    </svg>
  );

  return (
    <div
      className="flex flex-col justify-center"
      onMouseLeave={() => mouseLeaveHandler()}
    >
      <ul
        style={{ gap: subNavGap + "px" }}
        className={`list-reset flex items-center`}
      >
        {data.map(({ sectionName, sectionOptions, sectionImage }, index) => (
          <NavDropdown
            key={index}
            myRef={myRefs.current[index]}
            sectionName={sectionName}
            sectionOptions={sectionOptions}
            sectionImage={sectionImage}
            onMouseEnter={() => mouseEnterHandler(index + 1)}
            onMouseLeave={() => mouseLeaveHandler}
            activeTab={activeTab === index + 1}
          />
        ))}
      </ul>
      <div className="h-[0px]">
        <div
          className={`h-[60px] w-full transition-all ${
            activeTab > 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            style={{ paddingLeft: triangleDistance }}
            className={`translate-y-[30px] text-white transition-all`}
          >
            {triangleSvg}
          </div>
        </div>
      </div>
    </div>
  );
};

function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <>
      <header className="container absolute top-0 right-0 left-0 z-50 mx-auto h-[122px] px-[20px] lg:px-0">
        <div className="shadow-xs relative z-50 py-6 lg:py-10">
          <div className="flex items-center justify-between gap-x-[10px] lg:gap-x-[50px]">
            <div className="flex items-center pb-[8px] pl-2">
              <Logo />
              <div className="block lg:hidden">
                <i className="bx bx-menu text-4xl text-primary"></i>
              </div>
            </div>

            <div className="flex hidden w-auto flex-row-reverse items-center  xl:flex">
              <SubNav />
              {/* <IconButton
                icon={
                  <svg
                    width="22"
                    height="22"
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
                }
              /> */}
              {/* <IconButton
                classes="hidden lg:block"
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              /> */}
              {/* <IconButton
                classes="block lg:hidden"
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              /> */}
            </div>

            <div className="w-full flex-1 grow">
              <SearchBar />
            </div>
            <div className="flex  w-auto flex-row-reverse items-center gap-3">
              <IconButton
                icon={
                  <svg
                    width="22"
                    height="22"
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
                }
              />
              <IconButton
                classes="hidden lg:block"
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
              <IconButton
                classes="block lg:hidden"
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
            </div>
            <div className="hidden ">
              <i className="bx bx-menu text-3xl text-primary"></i>
            </div>
          </div>
        </div>
        <div className="mb-[20px] hidden justify-center lg:flex xl:hidden">
          <SubNav />
        </div>
      </header>
    </>
  );
}

export default Header;
