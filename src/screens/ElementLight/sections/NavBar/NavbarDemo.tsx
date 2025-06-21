"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./../../../../components/ui/resizable-navbar";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Services", link: "/Services" },
    { name: "Events", link: "/Services" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <Navbar className=" backdrop-blur-sm fixed top-0 left-0 right-0">
        {/* Desktop Navigation */}
        <NavBody>
          {/* Logo */}
          <div className="w-60 h-14 bg-[url(/ever-efficient-logo.png)] bg-contain bg-no-repeat bg-left" />

          {/* Navigation Links */}
          <NavItems items={navItems} />

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <NavbarButton
              asChild
              variant="primary"
              className="bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] shadow-[0px_0px_40px_5px_#0000000d] h-10 px-6 text-everefficientlkwhite text-sm font-medium tracking-wide transition-all duration-300"
            >
              <a
                href="/Contact"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img
                  className="w-4 h-4"
                  alt="Component"
                  src="/component-1-38.svg"
                />
                <span>CONTACT US</span>
              </a>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="w-60 h-14 bg-[url(/ever-efficient-logo.png)] bg-contain bg-no-repeat bg-left" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-everefficientlkwhite hover:text-everefficientlkcerulean-blue text-base font-medium transition-colors duration-300 py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] shadow-[0px_0px_40px_5px_#0000000d] text-everefficientlkwhite text-sm tracking-wide"
              >
                <a
                  href="/Contact"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <img
                    className="w-4 h-4"
                    alt="Component"
                    src="/component-1-38.svg"
                  />
                  <span>CONTACT US</span>
                </a>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
