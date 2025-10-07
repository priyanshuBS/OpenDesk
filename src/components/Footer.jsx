import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Report Issue", href: "/report" },
    { name: "My Issues", href: "/my-issues" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-blue-600 text-3xl font-bold">🏛️</span>
            <span className="font-bold text-xl text-gray-800">
              CivicConnect
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2025 CivicConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
