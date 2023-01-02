import React from "react";

const BigFeaturesBlock = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-10 pb-20 md:pb-24 lg:grid-cols-2 lg:pb-32">
      <div className="mx-auto px-10 text-center lg:mx-0 lg:text-left">
        <div className="pb-4 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3">
          <h1 className="font-butler lg:text-4.5xl text-3xl text-secondary md:text-4xl">
            Trending BoH Collections
          </h1>
          <p className="font-hk pt-4 text-lg text-secondary-lighter">
            Checkout our newest trends this coming season
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-10 lg:mt-0">
        <div className="relative h-56 bg-gray-100 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center">
          <div className="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
            <h3 className="font-hk text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
              Passion Pearl <br /> Collection
            </h3>
            <a href="/collection-list" className="group flex items-center pt-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <i className="bx bx-chevron-right group-hover:text-v-red text-xl text-primary transition-colors"></i>
              </div>
              <span className="font-hk group-hover:text-v-red -mt-1 pl-3 font-semibold leading-none text-primary transition-colors sm:pl-5 sm:text-lg">
                Get it now
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:h-68 relative h-56 bg-gray-200 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center">
        <div className="absolute inset-0 px-6 py-14 md:w-2/3 md:px-10">
          <h3 className="font-hk text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
            Hoodie your way! For Men
          </h3>
          <a href="/collection-list" className="group flex items-center pt-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
              <i className="bx bx-chevron-right group-hover:text-v-red text-xl text-primary transition-colors"></i>
            </div>
            <p className="font-hk group-hover:text-v-red -mt-1 pl-3 font-semibold leading-none text-primary transition-colors sm:pl-5 sm:text-lg">
              Get it now
            </p>
          </a>
        </div>
      </div>
      <div className="relative h-56 bg-gray-100 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center lg:row-span-2 lg:h-auto">
        <div className="absolute inset-0 w-2/3 px-6 py-14 sm:py-16 md:px-10">
          <h3 className="font-hk text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
            W.W. Shoes <br /> by Elyssi
          </h3>
          <a href="/collection-list" className="group flex items-center pt-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
              <i className="bx bx-chevron-right group-hover:text-v-red text-xl text-primary transition-colors"></i>
            </div>
            <p className="font-hk group-hover:text-v-red -mt-1 pl-3 font-semibold leading-none text-primary transition-colors sm:pl-5 sm:text-lg">
              Get it now
            </p>
          </a>
        </div>
      </div>
      <div className="lg:h-68 relative h-56 bg-gray-100 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center">
        <div className="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
          <h3 className="font-hk text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
            Anabelle Purses by Elyssi
          </h3>
          <a href="/collection-list" className="group flex items-center pt-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
              <i className="bx bx-chevron-right group-hover:text-v-red text-xl text-primary transition-colors"></i>
            </div>
            <p className="font-hk group-hover:text-v-red -mt-1 pl-3 font-semibold leading-none text-primary transition-colors sm:pl-5 sm:text-lg">
              Get it now
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BigFeaturesBlock;
