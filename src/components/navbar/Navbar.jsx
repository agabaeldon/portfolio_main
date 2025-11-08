import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
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

  const closeMenu = () => {
    setShowMenu(false);
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

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        {/* Top contact bar */}
        <div className="bg-secondary dark:bg-gray-900 dark:text-white">
          <div className="container px-2 sm:px-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 py-1.5 text-xs sm:text-sm">
              <a href="mailto:agabaeldon@gmail.com" className="hover:underline truncate max-w-[140px] sm:max-w-none font-bold">
                agabaeldon@gmail.com
              </a>
              <span className="opacity-40 hidden sm:inline">|</span>
              <a href="tel:+256765026870" title="Call 0765026870" className="hover:underline whitespace-nowrap font-bold">
                0765026870
              </a>
              <span className="opacity-40 hidden sm:inline">|</span>
              <a href="tel:+256751501556" title="Call 0751501556" className="hover:underline whitespace-nowrap font-bold">
                0751501556
              </a>
            </div>
          </div>
        </div>
        <nav id="home" className="bg-secondary dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container flex justify-between items-center py-3 sm:py-0 px-2 sm:px-4">
            <h1 className="text-base sm:text-xl md:text-4xl font-bold text-primary flex justify-center items-center">
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
                    className="text-2xl dark:text-white cursor-pointer"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-2xl dark:text-white cursor-pointer"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </ul>
            </div>
            {/* Mobile Responsive Menu */}
            <div className="sm:hidden">
              <div className="flex items-center gap-3">
                {/* Light and dark mode switcher */}
                {theme === "dark" ? (
                  <BiSolidSun
                    className="text-xl dark:text-white cursor-pointer"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <BiSolidMoon
                    className="text-xl dark:text-white cursor-pointer"
                    onClick={() => setTheme("dark")}
                  />
                )}
                <FiMenu
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar Overlay Backdrop */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white dark:bg-gray-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <FiX
              className="text-2xl cursor-pointer dark:text-white"
              onClick={closeMenu}
            />
          </div>

          {/* Sidebar Menu Items */}
          <ul className="flex flex-col flex-1 py-4 overflow-y-auto">
            {navMenus.map((navMenu, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `block px-6 py-4 text-lg font-semibold dark:text-white hover:bg-secondary dark:hover:bg-gray-800 transition ${
                        isActive ? "text-primary bg-secondary dark:bg-gray-800" : ""
                      }`
                    }
                    to={navMenu.link}
                    onClick={closeMenu}
                  >
                    {navMenu.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* spacer for fixed header */}
      <div className="h-[98px] sm:h-[112px]"></div>
    </>
  );
};

export default Navbar;
