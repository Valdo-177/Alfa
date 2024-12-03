"use client";
import React, { useEffect, useState } from "react";
import { Thermometer } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import RowSvg from "@/assets/Icon_row.svg";

const IconRow = () => {
  return <Image src={RowSvg} alt="" />;
};

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 65); // Cambia el valor según el punto donde deseas cambiar el fondo
      if (currentScrollY > scrollY && currentScrollY > 200) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

  return (
    <header
      className={`fixed top-0 left-0 w-full text-white z-10 transition-all duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-[#042160e8] backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="container flex items-center mx-auto justify-between py-6 px-4 sm:px-0">
        <div className="flex items-center gap-1">
          <Thermometer />
          <span className="font-bold text-xl">ALFA</span>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-3 text-lg">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </nav>
        <Button className="hidden sm:flex bg-transparent hover:bg-transparent shadow-none text-lg items-center gap-3 hover:gap-5 w-40 transition-all ease-in-out">
          Ver más <IconRow />
        </Button>
      </div>
    </header>
  );
};

export default Nav;
