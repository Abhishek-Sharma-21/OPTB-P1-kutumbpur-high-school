import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ title, items, isOpen, toggle }) => (
  <li className="relative">
    <button
      onClick={toggle}
      className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {title}
      <svg
        className="w-2.5 h-2.5 ms-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    {isOpen && (
      <div className="absolute left-0 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

const Navbar = () => {
  const [isHomeOpen, setHomeOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAcademicsOpen, setAcademicsOpen] = useState(false);
  const [isPortalsOpen, setPortalsOpen] = useState(false);
  const [isCuriosityCornerOpen, setCuriosityCornerOpen] = useState(false);
  return (
    <>
      {/* OPTB-P1-kutumbpur-high-school */}

      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </NavLink>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Dropdown
                title="Home"
                items={[
                  { label: "About Us", link: "/about" },
                  { label: "Contact", link: "/contact" },
                  { label: "Updates", link: "/updates" },
                  { label: "Testimonials", link: "/testimonials" },
                ]}
                isOpen={isHomeOpen}
                toggle={() => setHomeOpen(!isHomeOpen)}
              />
              <Dropdown
                title="Academics"
                items={[
                  { label: "Academics", link: "/academics" },
                  { label: "Admissions", link: "/admissions" },
                  { label: "Events", link: "/events" },
                ]}
                isOpen={isAcademicsOpen}
                toggle={() => setAcademicsOpen(!isAcademicsOpen)}
              />
              <Dropdown
                title="Portals"
                items={[
                  { label: "Faculty Portal", link: "/faculty-portal" },
                  { label: "Student Portal", link: "/student-portal" },
                  { label: "Parent Portal", link: "/parent-portal" },
                ]}
                isOpen={isPortalsOpen}
                toggle={() => setPortalsOpen(!isPortalsOpen)}
              />
              <Dropdown
                title="Curiosity Corner"
                items={[
                  { label: "Resources", link: "/resources" },
                  {
                    label: "Extracurricular Activities",
                    link: "/extracurricular",
                  },
                  { label: "Alumni Section", link: "/alumni" },
                  { label: "Library", link: "/library" },
                  { label: "Events Calendar", link: "/events-calendar" },
                ]}
                isOpen={isCuriosityCornerOpen}
                toggle={() => setCuriosityCornerOpen(!isCuriosityCornerOpen)}
              />
              <li>
                <NavLink
                  to="/faq"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
