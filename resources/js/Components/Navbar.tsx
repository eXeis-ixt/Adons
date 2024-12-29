import React, { useState } from 'react';
// import NavbarLinks from './NavbarLinks';
// import MobileMenu from './MobileMenu';

import NavbarLinks from './NavbarLink';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-xl">
      {/* Backdrop blur container */}
      <div className="absolute inset-0 bg-transparent backdrop-blur-lg rounded-xl shadow-lg" />

      {/* Navbar content */}
      <div className="relative px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <span className="text-xl font-semibold">Adons Tech</span>

          {/* Desktop Navigation */}
          <NavbarLinks className="hidden md:flex items-center space-x-8" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-current transform transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-current transform transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
