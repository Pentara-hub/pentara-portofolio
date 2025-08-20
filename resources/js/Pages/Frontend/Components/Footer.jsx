import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/public/images/logo.png" alt="Pentara logo" />
                </div>
              </div>
              <span className="text-xl font-semibold ml-3 mt-1">Pentara</span>
            </div>
            <p className="text-slate-300 mb-6">
              We design, develop, and deploy full-stack web apps and cloud
              infrastructure that scale.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/#home"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-all"
                aria-label="Home"
              >
                <i className="fab fa-dribbble" />
              </Link>
              <a
                href="https://www.instagram.com/pentara_5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["Home", "home"],
                ["Services", "services"],
                ["Work", "work"],
                ["Process", "process"],
                ["About", "about"],
                ["Contact", "contact"],
              ].map(([label, hash]) => (
                <li key={hash}>
                  <Link
                    to={`/#${hash}`}
                    className="text-slate-300 hover:text-white transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "Cloud & DevOps", "API Development"].map(
                (s) => (
                  <li key={s}>
                    <Link
                      to="/#services"
                      className="text-slate-300 hover:text-white transition-all"
                    >
                      {s}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2025 Pentara-Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
