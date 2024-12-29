import React from 'react';
import NavbarLinks from './NavbarLink';
// import NavbarLinks from './NavbarLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-transparent backdrop-blur-lg py-4 px-4 shadow-lg md:hidden">
      <NavbarLinks className="flex flex-col space-y-4" onItemClick={onClose} />
    </div>
  );
};

export default MobileMenu;
