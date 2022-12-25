import React from "react";
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
    sectionName: "Kosmetika",
    sectionImage:
      "https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    sectionOptions: [
      {
        sectionTitle: "Moterims",
        sectionItems: [
          {
            linkName: "Lūpų balzamai",
          },
          {
            linkName: "Lūdažiai",
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
  return (
    <div className="mb-[20px] hidden justify-center lg:flex">
      <ul className="list-reset flex items-center">
        {data.map(({ sectionName, sectionOptions, sectionImage }, index) => (
          <NavDropdown
            sectionName={sectionName}
            sectionOptions={sectionOptions}
            sectionImage={sectionImage}
          />
        ))}
      </ul>
    </div>
  );
};

function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <>
      <header className="container relative mx-auto">
        <div className="shadow-xs relative z-50 py-6 lg:py-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center">
              <Logo />
              <div className="block lg:hidden">
                <i className="bx bx-menu text-4xl text-primary"></i>
              </div>
            </div>
            <div className="flex-1">
              <SearchBar />
            </div>
            <div className="flex flex-1 flex-row-reverse items-center gap-2">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
            </div>
            <div className="hidden ">
              <i className="bx bx-menu text-3xl text-primary"></i>
            </div>
          </div>
        </div>
      </header>
      <SubNav />
    </>
  );
}

export default Header;
