'use client';

import ThemeToggle from './ThemeToggle';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <nav className="nav">
            <ThemeToggle />
            <h1 className="my-name">Danial Alborz</h1>
            <NavbarLinks />
        </nav>
    );
};

export default Navbar;
