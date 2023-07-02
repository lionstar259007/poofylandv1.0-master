"use client"; // this is a client component
import React, { useState } from "react";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={`navigation ${scrollPosition > 0 ? "nav-bg" : ""}`}>
      <div className="content">
        <a href="#" className="u-pull-left">
          <img
            src="/imgs/logo-small.png"
            className="logo"
            alt="PoofyLand Logo"
          />
        </a>

        <nav className="menu u-pull-right">
          <span className="menu-links hidden">
            <a className="menu active" href="#home">
              Home
            </a>
            <a className="menu" href="#about">
              About
            </a>
            <a className="menu" href="#nft">
              NFT
            </a>
            <a className="menu" href="#modes">
              Modes
            </a>
            <a className="menu" href="#events">
              Events
            </a>
            <a className="menu" href="#roadmap">
              Roadmap
            </a>
            <a className="menu" href="#faqs">
              FAQs
            </a>
            <a className="menu" href="#updates">
              Updates
            </a>
            <a className="menu" href="#community">
              Community
            </a>
            <a href="https://poofyland.shop/" target="_blank">
              Shop
            </a>
          </span>

          <span className="mhidden">
            <a onClick={() => setNavbar(!navbar)}>
              <IoMdMenu size={20} />
            </a>
          </span>

          <div style={{ display: `${navbar ? "block" : "none"}` }}>
            <div className="floating-menu centered">
              <span className="menu-links">
                <a
                  className="menu"
                  href="/#home"
                  onClick={() => setNavbar(!navbar)}
                >
                  Home
                </a>
                <a
                  className="menu"
                  href="/#about"
                  onClick={() => setNavbar(!navbar)}
                >
                  About
                </a>
                <a
                  className="menu"
                  href="/#nft"
                  onClick={() => setNavbar(!navbar)}
                >
                  NFT
                </a>
                <a
                  className="menu"
                  href="/#modes"
                  onClick={() => setNavbar(!navbar)}
                >
                  Modes
                </a>
                <a
                  className="menu"
                  href="/#events"
                  onClick={() => setNavbar(!navbar)}
                >
                  Events
                </a>
                <a
                  className="menu"
                  href="/#roadmap"
                  onClick={() => setNavbar(!navbar)}
                >
                  Roadmap
                </a>
                <a
                  className="menu"
                  href="/#faqs"
                  onClick={() => setNavbar(!navbar)}
                >
                  FAQs
                </a>
                <a
                  className="menu"
                  href="/#updates"
                  onClick={() => setNavbar(!navbar)}
                >
                  Updates
                </a>
                <a
                  className="menu"
                  href="/#community"
                  onClick={() => setNavbar(!navbar)}
                >
                  Community
                </a>
                <a
                  href="https://poofyland.shop/"
                  target="_blank"
                  onClick={() => setNavbar(!navbar)}
                >
                  Shop
                </a>
                <IoMdClose className="icon-container" size={60} onClick={() => setNavbar(!navbar)}/>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
