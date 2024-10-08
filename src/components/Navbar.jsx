import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { mine } from "../assets";
import { github, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumeLink =
    "https://drive.google.com/file/d/1hmaeZ5NDhdNOiJKm6j5O52xTFz368shf/view";
  const githubLink = "https://github.com/aryangandhi05";
  const linkedinLink = "https://www.linkedin.com/in/aryan-gandhi-740872225/";

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={mine} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Aryan Gandhi &nbsp;
            <span className="sm:block hidden"> | My Canvas</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li className="text-secondary text-[16px] font-medium cursor-pointer">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className="text-secondary text-[16px] font-medium cursor-pointer">
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="text-secondary text-[16px] font-medium cursor-pointer">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
