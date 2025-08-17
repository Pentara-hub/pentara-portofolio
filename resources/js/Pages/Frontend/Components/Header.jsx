// resources/js/Components/Header.jsx
import React from "react";
import Switch from "./Switch";

const Header = () => {
  return (
    <>
      <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-md z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="assets/images/logo.png" alt="Profile" />
                <span className="text-xl font-semibold ml-2 mt-1">Pentara</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a
                  href="#home"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  Services
                </a>
                <a
                  href="#work"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  Work
                </a>
                <a
                  href="#process"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  Process
                </a>
                <a
                  href="#about"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  About
                </a>
                <a
                  href="#team"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  Contact
                </a>

                {/* Replace old moon/sun button with the component */}
                <div className="ml-4">
                  <Switch />
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                id="mobileMenuBtn"
                className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <i className="fas fa-bars" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          className="hidden md:hidden bg-white dark:bg-dark shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              Services
            </a>
            <a
              href="#work"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              Work
            </a>
            <a
              href="#process"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              Process
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              About
            </a>
            <a
              href="#team"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              Team
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              Contact
            </a>

            {/* Optional: show switch in mobile dropdown too */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 px-3 pb-4">
              <Switch />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
