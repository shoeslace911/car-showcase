import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Footer = () => {
  return (
    <div className="footer border-y-8">
      <footer className="py-8">
        <div className="flex justify-evenly">
          <Image src="/logo.svg" alt="image" width={200} height={50} />
          <ul>
            <li>Home</li>

            <li>Cars</li>

            <li>Gamer</li>

            <li>Gamer</li>

            <li>Gamer</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
