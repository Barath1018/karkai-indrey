import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./images/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Vision", path: "/vision" },
  { name: "Mission", path: "/mission" },
  { name: "Workshops", path: "/workshops" },
  { name: "Apply", path: "/apply" },
  { name: "Contact", path: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0, y: -30, scaleY: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scaleY: 0.8,
    transition: {
      duration: 0.3,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={Logo}
                alt="Karkai Indrey Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-poppins font-bold text-xl text-green-700 group-hover:text-green-800 transition-colors">
                Karkai Indrey
              </span>
              <span className="text-xs text-gray-500">Soil Steps presents</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.path)
                    ? "text-green-700 bg-green-100 shadow-sm"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://your-donation-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white text-sm rounded-md shadow hover:bg-green-700 transition"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden origin-top overflow-hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 rounded-b-2xl shadow-lg sm:mx-3 sm:mt-2"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-green-700 bg-green-100"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <a
                    href="https://your-donation-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 px-4 py-2 bg-green-600 text-white text-base rounded-md shadow hover:bg-green-700 transition"
                  >
                    Donate
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
