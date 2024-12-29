import { Link } from '@inertiajs/react';
import React from 'react';

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
}

const NavbarLinks: React.FC<NavLinksProps> = ({ className = '', onItemClick }) => {
  const links = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Products' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' }
  ];

  return (
    <div className={className}>
      {links.map(link => (
        <Link
          key={link.label}
          href={link.href}
          className="text-white transition-colors"
          onClick={onItemClick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
