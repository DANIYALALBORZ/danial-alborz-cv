'use client';

import ThemeToggle from './ThemeToggle';
import NavbarLinks from './NavbarLinks';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    return (
        <nav className="nav">
            <MobileMenu />
            <ThemeToggle />
            <h1 className="my-name">Danial Alborz</h1>
            <NavbarLinks />
        </nav>
    );
};

export default Navbar;
