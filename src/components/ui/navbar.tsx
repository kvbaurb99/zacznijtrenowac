"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ImageLogo from "@/src/logo.svg";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trainersOpen, setTrainersOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nas", href: "/#about" },
    { name: "Metamorfozy", href: "/#transformations" },
    { name: "Vouchery", href: "/#vouchers" },
    { name: "Kontakt", href: "/#contact" },
  ];

  const trainers = [
    { name: "Dariusz Sklarczyk", href: "/trenerzy/dariusz-sklarczyk" },
    { name: "Asia Rozmus-Sklarczyk", href: "/trenerzy/asia-rozmus-sklarczyk" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-[background-color,border-color,padding,backdrop-filter] duration-300 ${scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4"
          : "bg-transparent py-6 border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          prefetch={false}
          href="/"
          className="flex items-center gap-2 group"
        >
          <Image
            priority
            fetchPriority="high"
            src={ImageLogo}
            alt="Zacznij Trenować Bielsko-Biała"
            width={90}
            className="hover:scale-95 duration-150"
            height={100}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              prefetch={false}
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-[width] duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Trenerzy Dropdown */}
          <div className="relative group">
            <button
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative flex items-center gap-1"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Trenerzy
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-[width] duration-300 group-hover:w-full" />
            </button>
            {/* Niewidoczny element wypełniający przestrzeń między przyciskiem a dropdownem - utrzymuje hover */}
            <div className="absolute top-full left-0 w-56 h-4" />
            <div className="absolute top-full left-0 pt-4 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-[opacity,transform] duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
              <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-xl shadow-2xl overflow-hidden">
                <nav className="py-2" role="menu">
                  {trainers.map((trainer) => (
                    <Link
                      prefetch={false}
                      key={trainer.href}
                      href={trainer.href}
                      className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors"
                      role="menuitem"
                    >
                      {trainer.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Umów trening
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          aria-label="Otwórz menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 px-4 py-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              prefetch={false}
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Trenerzy Section */}
          <div className="py-2 border-b border-zinc-900">
            <button
              className="text-lg font-medium text-zinc-300 hover:text-white w-full flex items-center justify-between"
              onClick={() => setTrainersOpen(!trainersOpen)}
            >
              Trenerzy
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${trainersOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {trainersOpen && (
              <div className="mt-2 pl-4 flex flex-col gap-2">
                {trainers.map((trainer) => (
                  <Link
                    key={trainer.href}
                    href={trainer.href}
                    className="text-base text-zinc-400 hover:text-white transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {trainer.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button className="w-full mt-4 px-5 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
            Umów trening
          </button>
        </div>
      )}
    </nav>
  );
}
