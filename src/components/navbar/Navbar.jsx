import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import delonLogo from "../../assets/DELON.png";

const navMenus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Certifications", link: "/certifications" },
  { name: "Blog", link: "/blog" },
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
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container">
            <div className="flex items-stretch">
              {/* Logo Column */}
              <div className="hidden md:flex items-center justify-center px-4 border-r border-gray-200 dark:border-gray-800">
                <Link to="/">
                  <img
                    src={delonLogo}
                    alt="DELON TECHNOLOGIES"
                    className="h-16 md:h-20 lg:h-24 w-auto min-w-[200px] md:min-w-[240px] lg:min-w-[280px] object-contain"
                  />
                </Link>
              </div>

              {/* Right Side Content */}
              <div className="flex-1 flex flex-col">
                {/* Top Contact Bar */}
                <div className="border-b border-gray-200 dark:border-gray-800">
                  <div className="flex justify-end items-center py-2 px-2 sm:px-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                      <a
                        href="mailto:agabaeldon@gmail.com"
                        className="hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        agabaeldon@gmail.com
                      </a>
                      <span className="opacity-40 dark:text-white">|</span>
                      <a
                        href="tel:+256765026870"
                        className="hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        0765026870
                      </a>
                      <span className="opacity-40 dark:text-white">|</span>
                      <a
                        href="tel:+256751501556"
                        className="hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        0751501556
                      </a>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1">
                  <div className="flex justify-between items-center h-full px-2 sm:px-4">
                    {/* Mobile Logo */}
                    <Link to="/" className="md:hidden">
                      <img
                        src={delonLogo}
                        alt="DELON TECHNOLOGIES"
                        className="h-10 sm:h-12 w-auto min-w-[120px] sm:min-w-[140px] object-contain"
                      />
                    </Link>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Theme Toggle - First on mobile, Last on desktop */}
                      <div className="sm:hidden">
                        {theme === "dark" ? (
                          <BiSolidSun
                            className="text-xl sm:text-2xl cursor-pointer dark:text-white"
                            onClick={() => setTheme("light")}
                          />
                        ) : (
                          <BiSolidMoon
                            className="text-xl sm:text-2xl cursor-pointer dark:text-white"
                            onClick={() => setTheme("dark")}
                          />
                        )}
                      </div>

                      {/* Mobile Menu Button */}
                      <button
                        className="sm:hidden p-1 sm:p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                      >
                        <FiMenu className="text-xl sm:text-2xl dark:text-white" />
                      </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:block ml-auto">
                      <ul className="flex items-center gap-6">
                        {navMenus.map((menu, index) => (
                          <li key={index}>
                            <NavLink
                              to={menu.link}
                              className={({ isActive }) =>
                                `text-sm font-medium py-4 px-2 inline-block transition-colors dark:text-white
                                ${isActive ? "text-primary" : "hover:text-primary dark:hover:text-primary"}`
                              }
                            >
                              {menu.name}
                            </NavLink>
                          </li>
                        ))}
                        {/* Theme Toggle - Desktop Version (Right End) */}
                        <li>
                          {theme === "dark" ? (
                            <BiSolidSun
                              className="text-xl cursor-pointer dark:text-white"
                              onClick={() => setTheme("light")}
                            />
                          ) : (
                            <BiSolidMoon
                              className="text-xl cursor-pointer dark:text-white"
                              onClick={() => setTheme("dark")}
                            />
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[60] sm:hidden"
            onClick={closeMenu}
          />
          <div className="fixed top-0 right-0 h-full w-[240px] xs:w-[280px] bg-white dark:bg-gray-900 z-[70] sm:hidden"> {/* Smaller width on xs screens */}
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Sidebar Header - Remove theme toggle from here since it's now always visible */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900">
                <h2 className="text-lg sm:text-xl font-bold text-primary">Menu</h2>
                <button 
                  className="p-1 sm:p-2" 
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FiX className="text-xl sm:text-2xl cursor-pointer dark:text-white" />
                </button>
              </div>

              {/* Sidebar Menu Items */}
              <ul className="flex flex-col flex-1 py-2 sm:py-4 overflow-y-auto">
                {navMenus.map((navMenu, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        className={({ isActive }) =>
                          `block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold dark:text-white hover:bg-secondary dark:hover:bg-gray-800 transition ${
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
        </>
      )}

      {/* Spacer */}
      <div className="h-[120px]" />
    </>
  );
};

export default Navbar;
