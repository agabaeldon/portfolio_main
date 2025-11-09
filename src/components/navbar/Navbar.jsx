import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { 
  HiHome, HiUser, HiBriefcase, HiCode, HiFolderOpen,
  HiChatAlt2, HiAcademicCap, HiDocumentText, HiMail
} from "react-icons/hi";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import delonLogo from "../../assets/DELON.png";

const navMenus = [
  { name: "Home", link: "/", icon: HiHome },
  { name: "About", link: "/about", icon: HiUser },
  { name: "Services", link: "/services", icon: HiBriefcase },
  { name: "Skills", link: "/skills", icon: HiCode },
  { name: "Projects", link: "/projects", icon: HiFolderOpen },
  { name: "Testimonials", link: "/testimonials", icon: HiChatAlt2 },
  { name: "Certifications", link: "/certifications", icon: HiAcademicCap },
  { name: "Blog", link: "/blog", icon: HiDocumentText },
  { name: "Contact", link: "/contact", icon: HiMail },
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
      <div className="fixed top-0 w-full z-50 shadow-sm">
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container">
            <div className="flex items-stretch">
              {/* Logo Column - Desktop Only */}
              <div className="hidden md:flex items-center justify-center px-3 xl:px-4 border-r border-gray-200 dark:border-gray-800 flex-shrink-0">
                <Link to="/">
                  <img
                    src={delonLogo}
                    alt="DELON TECHNOLOGIES"
                    className="h-16 md:h-20 lg:h-24 w-auto min-w-[250px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[350px] object-contain"
                  />
                </Link>
              </div>

              {/* Right Side Content */}
              <div className="flex-1 flex flex-col">
                {/* Top Contact Bar - Hidden on Mobile, Visible on Desktop */}
                <div className="hidden md:block border-b border-gray-200 dark:border-gray-800">
                  <div className="flex justify-center items-center py-2 px-4">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium">
                      <a
                        href="mailto:agabaeldon@gmail.com"
                        className="flex items-center gap-1.5 hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                      >
                        <FaEnvelope className="text-xs" />
                        <span>agabaeldon@gmail.com</span>
                      </a>
                      <span className="opacity-40 dark:text-white">|</span>
                      <a
                        href="tel:+256765026870"
                        className="flex items-center gap-1.5 hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                      >
                        <FaPhone className="text-xs" />
                        <span>0765026870</span>
                      </a>
                      <span className="opacity-40 dark:text-white">|</span>
                      <a
                        href="tel:+256751501556"
                        className="flex items-center gap-1.5 hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                      >
                        <FaPhone className="text-xs" />
                        <span>0751501556</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1">
                  <div className="flex justify-between items-center h-full px-3 sm:px-4 py-2 md:py-0">
                    {/* Mobile Logo */}
                    <Link to="/" className="md:hidden flex items-center">
                      <img
                        src={delonLogo}
                        alt="DELON TECHNOLOGIES"
                        className="h-10 sm:h-12 w-auto min-w-[180px] sm:min-w-[220px] object-contain"
                      />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center ml-auto gap-2 mr-4 md:mr-8 lg:mr-12 xl:mr-16">
                      <div className="overflow-x-auto">
                        <ul className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-nowrap">
                          {navMenus.map((menu, index) => (
                            <li key={index} className="flex-shrink-0">
                              <NavLink
                                to={menu.link}
                                className={({ isActive }) =>
                                  `text-xs md:text-sm font-medium py-4 px-1 md:px-1.5 inline-block transition-colors dark:text-white whitespace-nowrap
                                  ${isActive ? "text-primary" : "hover:text-primary dark:hover:text-primary"}`
                                }
                              >
                                {menu.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Theme Toggle - Desktop Version (Right End) */}
                      <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
                        aria-label="Toggle theme"
                      >
                        {theme === "dark" ? (
                          <BiSolidSun className="text-xl text-yellow-400 cursor-pointer" />
                        ) : (
                          <BiSolidMoon className="text-xl text-gray-700 dark:text-gray-300 cursor-pointer" />
                        )}
                      </button>
                    </div>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="flex items-center gap-2 sm:hidden">
                      {/* Theme Toggle */}
                      <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="Toggle theme"
                      >
                        {theme === "dark" ? (
                          <BiSolidSun className="text-xl text-white" />
                        ) : (
                          <BiSolidMoon className="text-xl" />
                        )}
                      </button>

                      {/* Mobile Menu Button */}
                      <button
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                      >
                        <FiMenu className="text-2xl dark:text-white" />
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] sm:hidden transition-opacity duration-300 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-[70] sm:hidden transform transition-transform duration-300 ease-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex items-center gap-3">
              <img
                src={delonLogo}
                alt="DELON TECHNOLOGIES"
                className="h-8 w-auto min-w-[150px] object-contain"
              />
              <h2 className="text-lg font-bold text-primary dark:text-white">Menu</h2>
            </div>
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FiX className="text-2xl text-gray-700 dark:text-white" />
            </button>
          </div>

          {/* Contact Info - Mobile Only */}
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-2 text-xs">
              <a
                href="mailto:agabaeldon@gmail.com"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-sm" />
                <span className="truncate">agabaeldon@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="tel:+256765026870"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <FaPhone className="text-sm" />
                  <span>0765026870</span>
                </a>
                <a
                  href="tel:+256751501556"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <FaPhone className="text-sm" />
                  <span>0751501556</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <ul className="flex flex-col flex-1 py-2 overflow-y-auto">
            {navMenus.map((navMenu, index) => {
              const Icon = navMenu.icon;
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3.5 mx-2 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10 dark:bg-primary/20 border-l-4 border-primary"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white"
                      }`
                    }
                    to={navMenu.link}
                    onClick={closeMenu}
                  >
                    <Icon className={`text-xl ${navMenu.name === "Home" ? "text-primary" : ""}`} />
                    <span>{navMenu.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Delon Technologies
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[70px] md:h-[110px]" />
    </>
  );
};

export default Navbar;
