import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import logo from "../assets/logo.png";

import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
  const { cartItems, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleOpenSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const navLinks = ["Home", "Browse", "Offers", "About", "Contact"];
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-gradient-to-r from-orange-100 via-yellow-50 to-pink-100 shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 text-orange-600 font-extrabold text-2xl">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-15 object-contain"
            style={{ maxHeight: "48px" }}
          />
          <span>TastyBite</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-semibold text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-orange-500 transition-all duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Cart + Login */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>

          <button
            onClick={handleOpenLogin}
            className="px-4 py-1.5 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
          >
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 ml-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Nav Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col space-y-2 font-medium text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-orange-500 transition-all"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Auth Modals */}
      {showLogin && (
        <Login onClose={handleClose} switchToSignup={handleOpenSignup} />
      )}
      {showSignup && (
        <Signup onClose={handleClose} switchToLogin={handleOpenLogin} />
      )}
    </header>
  );
};

export default Header;
