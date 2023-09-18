import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between item-center  sm:px-16 ">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.svg" alt="Car hub Logo" width={118} height={18} className="object-contain" />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;