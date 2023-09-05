"use client";

import React from "react";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="text-2xl">
      <div className="flex flex-col pt-36 padding-x">
        <h1 className="hero__title">Find, book, or rent a car -- quickly and easily</h1>
        <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
