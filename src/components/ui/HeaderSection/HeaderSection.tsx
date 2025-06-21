import React, { useEffect, useState } from "react";
import { Button } from "../button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../navigation-menu";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navigationLinks = [
  { text: "Home", url: "/" },
  { text: "Services", url: "/Services" },
  { text: "About Us", url: "/About" },
];

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 0.1) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-md bg-black/80 backdrop-blur-md transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
          <div className="w-[210px] h-[50px] bg-[url('/resize.png')] bg-cover bg-no-repeat bg-left" />

          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-8">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.url}
                    rel="noopener noreferrer"
                    className="font-medium text-white transition-colors duration-300 text-2sm hover:text-blue-400"
                  >
                    {link.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] shadow-lg h-12 px-6 transition-all duration-300"
            >
              <a
                href="/Contact"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <img
                  className="w-4 h-4"
                  alt="Contact Icon"
                  src="/component-1-38.svg"
                />
                <span>Contact Us</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="relative z-50 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="p-4 mt-4 space-y-4 transition-all duration-300 rounded-lg md:hidden">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block text-base font-medium text-white hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-[#275ba8] hover:bg-[#1e4a8c] rounded-md text-sm text-white h-11"
            >
              <a href="/Contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
