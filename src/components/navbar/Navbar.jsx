import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
const navMenus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        {/* Top contact bar */}
        <div className="bg-secondary dark:bg-gray-900 dark:text-white">
          <div className="container flex flex-col sm:flex-row gap-1 sm:gap-6 items-center justify-center sm:justify-between py-2 text-sm">
            <div className="hidden sm:block" />
            <div className="flex items-center gap-4">
              <a href="mailto:agabaeldon@gmail.com" className="hover:underline">
                agabaeldon@gmail.com
              </a>
              <span className="opacity-40">|</span>
              <a href="tel:+256765026870" title="Call 0765026870" className="hover:underline">
                0765026870
              </a>
              <span className="opacity-40">|</span>
              <a href="tel:+256751501556" title="Call 0751501556" className="hover:underline">
                0751501556
              </a>
            </div>
          </div>
        </div>
        <nav id="home" className="bg-secondary dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container flex justify-between items-center py-3 sm:py-0">
            <h1 className="text-2xl md:text-4xl font-bold text-primary flex justify-center items-center ">
              <Link to="/">DELON TECHNOLOGIES</Link>
            </h1>
            <div className="hidden sm:block">
            <ul className="flex items-center gap-4 dark:text-white">
              {navMenus.map((navMenu, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        `text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer ${isActive ? "text-primary" : ""}`
                      }
                      to={navMenu.link}
                    >
                      {navMenu.name}
                    </NavLink>
                  </li>
                );
                
              })}
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Responsive Menu */}
          <div className="sm:hidden">
            <div className="flex items-center gap-4">
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
              <FiMenu
                className="text-2xl cursor-pointer dark:text-white "
                onClick={toggleMenu}
              />
            </div>
            {showMenu && (
              <div className=" fixed top-16 bg-white dark:text-white dark:bg-gray-950 shadow-md rounded-b-xl  left-0 w-full z-10 py-10">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map((navMenu, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          className={({ isActive }) =>
                            `text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer ${isActive ? "text-primary" : ""}`
                          }
                          to={navMenu.link}
                          onClick={() => setShowMenu(false)}
                        >
                          {navMenu.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      </div>
      {/* spacer for fixed header */}
      <div className="h-[98px] sm:h-[112px]"></div>
    </>
  );
};

export default Navbar;
