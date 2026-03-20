import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiCode,
  HiFolderOpen,
  HiChatAlt2,
  HiAcademicCap,
  HiDocumentText,
  HiMail,
} from "react-icons/hi";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import delonLogo from "../../assets/delon_logo.png";

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
  }, [theme, element]);

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
      <div
        className="fixed top-0 z-50 w-full backdrop-blur-xl"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="border-b border-black/8 bg-white dark:border-white/10 dark:bg-gray-950">
          <div className="px-3 sm:px-4 lg:px-5">
            <div className="flex min-h-[96px] items-center justify-between gap-4 sm:min-h-[108px] lg:min-h-[124px]">
              <Link to="/" className="flex shrink-0 items-center py-4 sm:py-5">
                <img
                  src={delonLogo}
                  alt="DELON TECHNOLOGIES"
                  className="h-[4.5rem] w-auto rounded-xl bg-white object-contain sm:h-24 md:h-28 lg:h-32 dark:bg-gray-950"
                />
              </Link>

              <div className="hidden lg:flex flex-1 items-center justify-center px-6">
                <ul className="flex items-center gap-1 xl:gap-2">
                  {navMenus.map((menu, index) => (
                    <li key={index}>
                      <NavLink
                        to={menu.link}
                        className={({ isActive }) =>
                          `inline-flex items-center rounded-full px-3 py-2 text-sm font-medium tracking-[0.01em] transition-all duration-200 xl:px-4 ${
                            isActive
                              ? "bg-primary/8 text-primary dark:bg-primary/15"
                              : "text-gray-700 hover:bg-black/[0.03] hover:text-primary dark:text-gray-200 dark:hover:bg-white/[0.05] dark:hover:text-primary"
                          }`
                        }
                      >
                        {menu.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden shrink-0 items-center gap-3 md:flex">
                <div className="hidden items-center gap-3 border-r border-black/8 pr-3 text-sm text-gray-600 dark:border-white/10 dark:text-gray-300 xl:flex">
                  <a
                    href="mailto:agabaeldon@gmail.com"
                    className="flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <FaEnvelope className="text-[13px]" />
                    <span>agabaeldon@gmail.com</span>
                  </a>
                  <span className="h-4 w-px bg-black/8 dark:bg-white/10" />
                  <a
                    href="tel:+256765026870"
                    className="flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <FaPhone className="text-[13px]" />
                    <span>0765026870</span>
                  </a>
                </div>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/80 text-gray-700 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:bg-white/[0.08]"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <BiSolidSun className="text-xl text-yellow-400" />
                  ) : (
                    <BiSolidMoon className="text-xl" />
                  )}
                </button>

                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/80 text-gray-700 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08] lg:hidden"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <FiMenu className="text-[22px]" />
                </button>
              </div>

              <div className="flex shrink-0 items-center gap-2 md:hidden">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/80 text-gray-700 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:bg-white/[0.08]"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <BiSolidSun className="text-xl text-yellow-400" />
                  ) : (
                    <BiSolidMoon className="text-xl" />
                  )}
                </button>

                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/80 text-gray-700 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <FiMenu className="text-[22px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          showMenu ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm transform bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-gray-900 lg:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-black/8 bg-gradient-to-r from-primary/5 via-transparent to-transparent px-4 py-5 dark:border-white/10">
            <img
              src={delonLogo}
              alt="DELON TECHNOLOGIES"
              className="h-14 w-auto rounded-lg bg-white object-contain dark:bg-gray-900"
            />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 transition-colors hover:bg-gray-100 dark:border-white/10 dark:hover:bg-gray-800"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FiX className="text-2xl text-gray-700 dark:text-white" />
            </button>
          </div>

          <div className="border-b border-black/8 bg-gray-50/80 px-4 py-4 dark:border-white/10 dark:bg-gray-800/40">
            <div className="flex flex-col gap-2 text-xs">
              <a
                href="mailto:agabaeldon@gmail.com"
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary dark:text-gray-300"
              >
                <FaEnvelope className="text-sm" />
                <span className="truncate">agabaeldon@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="tel:+256765026870"
                  className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary dark:text-gray-300"
                >
                  <FaPhone className="text-sm" />
                  <span>0765026870</span>
                </a>
                <a
                  href="tel:+256751501556"
                  className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary dark:text-gray-300"
                >
                  <FaPhone className="text-sm" />
                  <span>0751501556</span>
                </a>
              </div>
            </div>
          </div>

          <ul className="flex flex-1 flex-col overflow-y-auto py-3">
            {navMenus.map((navMenu, index) => {
              const Icon = navMenu.icon;
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `mx-3 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary dark:bg-primary/20"
                          : "text-gray-700 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
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

          <div className="border-t border-black/8 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-gray-800/40">
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              Copyright {new Date().getFullYear()} Delon Technologies
            </p>
          </div>
        </div>
      </div>

      <div className="h-[96px] sm:h-[108px] lg:h-[124px]" />
    </>
  );
};

export default Navbar;
