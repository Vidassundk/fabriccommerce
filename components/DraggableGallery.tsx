import Image from "next/image";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { inter } from "../utility/fonts";

interface FancyProductProps {
  imageUrl: string;
  productName: string;
  productBrand: string;
  productPrice: string;
  second?: boolean;
}

const productGalleryData = [
  {
    productName: "Ukrainietiška kosmetika",
    productBrand: "Naughty",
    imageUrl:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2786&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Odos priežiūra",
    productBrand: "Magritte",
    imageUrl:
      "https://images.unsplash.com/photo-1617030557331-75cb865d9d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Pats geriausias",
    productBrand: "Bútelis",
    imageUrl:
      "https://images.unsplash.com/photo-1620917670397-dc7bc45eeda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2501&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Kosmetika",
    productBrand: "Lillé",
    imageUrl:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
    productPrice: "16.99",
  },

  {
    productName: "Jūsų Jaukumui",
    productBrand: "Namai",
    imageUrl:
      "https://images.unsplash.com/photo-1655570313279-a50124d29924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2619&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Produktas",
    productBrand: "Švelnumas",
    imageUrl:
      "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg",
    productPrice: "16.99",
  },
  {
    productName: "Produktas",
    productBrand: "Curology",
    imageUrl:
      "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80",
    productPrice: "16.99",
  },
  {
    productName: "Essencials",
    productBrand: "Narciso",
    imageUrl:
      "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    productPrice: "16.99",
  },
];

const Product = ({
  imageUrl,
  productName,
  productPrice,
  productBrand,
  second,
}: FancyProductProps) => {
  //
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const hover = (
    <div className=" group absolute inset-0 inline-block   ">
      <div className="z-1 absolute inset-0 bg-[#4C413B] opacity-0 transition-opacity group-hover:opacity-80" />
      <div className="z-1 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
        <a
          href="/cart"
          className="mr-3 flex items-center rounded-full bg-white p-3 text-[#4C413B] transition-all hover:bg-[#4C413B] hover:text-white"
        >
          <svg
            className=""
            width="16"
            height="16"
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
        </a>
        {/* <a
          href="/cart"
          className="mr-3 flex items-center rounded-full bg-white p-3 text-black transition-all hover:bg-black hover:text-white"
        ></a> */}
        <a
          href="/cart"
          className="mr-3 flex items-center rounded-full bg-white p-3 text-[#4C413B] transition-all hover:bg-[#4C413B] hover:text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  const leftRandomImageHeight = getRandomArbitrary(74, 100);
  const RightRandomImageHeight = getRandomArbitrary(70, 84);
  const biggerfirstImage = leftRandomImageHeight > 80;

  return (
    // <div style={{ marginRight: getRandomArbitrary(60, 350) + "px" }}>
    <div
      style={{
        marginRight: second
          ? getRandomArbitrary(300, 450) + "px"
          : getRandomArbitrary(110, 220) + "px",
      }}
      className={`splide__slide relative flex ${
        !second
          ? "flex-col"
          : biggerfirstImage
          ? "flex-row"
          : "flex-col-reverse"
      } `}
    >
      <div
        style={{
          marginTop: second ? (biggerfirstImage ? "auto" : "none") : "none",
          height: !second
            ? RightRandomImageHeight + "%"
            : leftRandomImageHeight + "%",
        }}
        className="inline-block flex rounded"
      >
        <div className="justify-bottom relative bg-gray-100 ">
          <img
            src={imageUrl}
            alt="product image"
            className="h-full object-contain "
          />
          {hover}
        </div>
      </div>
      <div
        className={`flex  ${
          !second
            ? "h-[20%] flex-col justify-between pt-6"
            : biggerfirstImage
            ? "h-full flex-col justify-end pl-6"
            : "h-[20%] flex-col-reverse pb-4 "
        }  `}
      >
        <div>
          <h4
            className={`text-[11px] uppercase tracking-wider text-white ${inter.className}`}
          >
            {productName}
          </h4>
          <h2
            className={`text-white" -ml-[1px] text-[44px] leading-tight text-white ${
              second && biggerfirstImage && "-mb-[12px]"
            }`}
          >
            <b>{productBrand}</b>
          </h2>

          {/* <a className="group mt-2 inline-flex rounded-full border-black bg-white text-black hover:bg-black hover:text-white">
            <span className=" flex h-9 items-center justify-center   px-4 text-[14px] font-semibold uppercase transition duration-500 ease-in-out ">
              Naršyti prekes
            </span>

            <span className="flex h-9 w-12 flex-shrink-0 items-center justify-center  transition duration-500 ease-in-out ">
              <svg
                className="svg-inline--fa fa-chevron-right fa-w-8 fa-9x h-6 w-6"
                width="16"
                height="16"
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
              </svg>{" "}
            </span>
          </a> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

const DraggableGallery = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div
      style={{ height: "calc(100vh - 172px)" }}
      className="flex max-h-[1000px] overflow-x-hidden overflow-x-scroll"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      <div className="flex flex-none flex-row ">
        <div className="flex flex-1 flex-row bg-gradient-to-r from-[#CDC2B6] to-[#D4CCC3] p-14">
          {productGalleryData.map(
            (
              {
                productName,
                productPrice,
                imageUrl,
                productBrand,
              }: FancyProductProps,
              index
            ) => (
              <Product
                key={index}
                productName={productName}
                imageUrl={imageUrl}
                productPrice={productPrice}
                productBrand={productBrand}
                second={index % 2 === 0}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DraggableGallery;
