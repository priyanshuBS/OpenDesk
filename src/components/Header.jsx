import { useState } from "react";
import { HiMenu, HiX, HiOutlineOfficeBuilding } from "react-icons/hi"; // Menu, Close, and Building icon
import { IoMdPerson } from "react-icons/io"; // User icon
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Report Issue", href: "/report" },
    { name: "My Issues", href: "/my-issues" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Icon + Text */}
          <div className="flex items-center space-x-2">
            <HiOutlineOfficeBuilding className="text-blue-600 text-3xl" />
            <span className="font-bold text-xl text-gray-800 tracking-tight">
              CivicConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Login / Profile Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/login"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
            >
              <IoMdPerson className="text-lg" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm animate-slide-down">
          <nav className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="w-full mt-3 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
            >
              <IoMdPerson className="text-lg" />
              <span>Login</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
