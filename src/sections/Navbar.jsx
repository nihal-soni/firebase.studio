import { useState } from "react";
import logo from "../assets/logo.svg";

const navlinks = [
  { name: "Docs", path: "/docs" },
  { name: "Support", path: "/" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      
        <div className="flex items-center gap-8">
      
          <img src={logo} alt="Logo" className="h-10 w-auto" />

 
          <div className="hidden md:flex gap-6">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-white hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-2 text-black text-sm font-semibold rounded-full bg-orange-400 font-['Google Sans Display']">
            Get started
          </button>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="block px-4 py-2 text-gray-700 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
          <button className="block w-full text-center px-4 py-2 bg-orange-400 text-white font-semibold rounded-full font-['Google Sans Display']">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
