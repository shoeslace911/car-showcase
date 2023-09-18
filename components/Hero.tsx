"use client";

import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex ">
      <div className="flex flex-col w-1/2 text-justify">
        <h1 className="hero__title">Find, book, or rent a car ---- quickly and easily</h1>
        <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 w-1/4"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
