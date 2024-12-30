import React, { useState } from 'react';
// import NavbarLinks from './NavbarLinks';
// import MobileMenu from './MobileMenu';

import NavbarLinks from './NavbarLink';
import MobileMenu from './MobileMenu';
import { Link } from '@inertiajs/react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className=" md:w-[50%] md:mx-auto shadow-md fixed top-4 left-4 right-4 z-50 rounded-xl">
      {/* Backdrop blur container */}
      <div className="absolute inset-0  backdrop-blur-lg rounded-full" />

      {/* Navbar content */}
      <div className="relative px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" >
          {/* <span className=" font-semibold">Adons Tech</span> */}

          <img src="/adons.png" width={70} alt="Adons Tech" />
          </Link>

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
