import { Link } from "@inertiajs/react";
import React from "react";
import { BiRightArrow } from "react-icons/bi";

interface NavLinksProps {
    className?: string;
    onItemClick?: () => void;
}

const NavbarLinks: React.FC<NavLinksProps> = ({
    className = "",
    onItemClick,
}) => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "#", label: "Products" },
        { href: "#", label: "Blog" },
    ];

    return (
        <div className={className}>
            {links.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="text-white transition-colors"
                    onClick={onItemClick}
                >
                    {link.label}
                </Link>
            ))}

            <Link
                href="/contact"
                className="text-white hover:scale-105  delay-75 bg-primary-600 px-4 py-2 ring-2 ring-[#7081ff] rounded-md transition-colors"
                onClick={onItemClick}
            >
                Contact </Link>
        </div>
    );
};

export default NavbarLinks;
