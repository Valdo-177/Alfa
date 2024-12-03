"use client";
import React, { useEffect, useState } from "react";
import { AlignRight, Thermometer } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import RowSvg from "@/assets/Icon_row.svg";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const IconRow = () => {
    return <Image src={RowSvg} alt="" />;
};

const Nav = () => {
    const [showNav, setShowNav] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);


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

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const Sections = [
        "Bienvenidos",
        "Quiénes Somos",
        "Nuestro Propósito",
        "Nuestro Proceso",
        "Nuestro Equipo",
    ]

    return (
        <header
            className={`fixed top-0 left-0 w-full text-white z-10 transition-all duration-500 ${showNav ? "translate-y-0" : "-translate-y-full"
                } ${isScrolled ? "bg-[#042160e8] backdrop-blur-lg" : "bg-transparent"}`}
        >
            <div className="container flex items-center mx-auto justify-between py-6 px-4 sm:px-0">
                <div className="flex items-center gap-1">
                    <Thermometer />
                    <span className="font-bold text-xl">ALFA</span>
                </div>
                <nav className="hidden sm:block">
                    <div className="flex items-center gap-7 text-lg">
                        {Sections.map((item, index) => (
                            <div key={index} className="hover:underline cursor-pointer" onClick={() => scrollToSection(item)}>{item}</div>
                        ))}
                    </div>
                </nav>
                <Button onClick={() => scrollToSection('Bienvenidos')} className="hidden sm:flex bg-transparent hover:bg-transparent shadow-none text-lg items-center gap-3 hover:gap-5 w-40 transition-all ease-in-out">
                    Ver más <IconRow />
                </Button>
                <div className="sm:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <AlignRight />
                        </SheetTrigger>
                        <SheetContent side="left" className="text-black bg-white flex flex-col justify-between">
                            <SheetHeader>
                                <SheetTitle className="font-bold">ALFA</SheetTitle>
                                <SheetDescription>
                                    Diseñados para soportar las condiciones más extremas, nuestros productos te garantizan rendimiento y durabilidad.
                                </SheetDescription>
                                <div className="flex flex-col gap-4 py-4">
                                    {Sections.map(item => (
                                        <span
                                            key={item}
                                            onClick={() => {
                                                setOpen(false);
                                                scrollToSection(item);
                                            }}
                                            className="text-start w-full"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </SheetHeader>
                            <SheetFooter>
                                <span className='font-thin text-Primary3 text-[0.7rem] text-center mt-3'>
                                    © 2024 Alfa. Todos los derechos reservados.
                                </span>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Nav;
