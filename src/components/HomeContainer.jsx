import React, { useEffect, useRef, useState } from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "./utils/data";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="mt-8 flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Quick Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="-mt-4 text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            FoodFiesta!
          </span>
          <br />
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Great Food just clicks away! From our kitchen to your door - the
          ultimate food delivery experience.
        </p>
        <Link to={"/menu"}>
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            View Menu
          </button>
        </Link>
      </div>
      <div className="py-2 flex-2 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:h-600"
          alt="hero-bg"
        />
        <div className=" w-full h-auto absolute  left-0 flex items-center justify-center    py-4 lg:gap-16 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center  justify-center drop-shadow-lg"
              >
                <img
                  className="w-20 lg:w-30 -mt-10  "
                  src={n.imageSrc}
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">Rs. </span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
