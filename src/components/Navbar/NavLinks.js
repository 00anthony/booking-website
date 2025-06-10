import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ closeMenu }) => {
    return (
        <>
            <HashLink className="px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 flex items-center" smooth to="/#about"  onClick={() => closeMenu?.()}>
                About
            </HashLink>
            <HashLink className="px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 flex items-center" smooth to="/#services" onClick={() => closeMenu?.()}>
                Services
            </HashLink>
            <HashLink className="px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 flex items-center" to="/portfolio#portfolio" onClick={() => closeMenu?.()}>
                Portfolio
            </HashLink>
            <HashLink className="px-4 py-2 font-extrabold text-gray-500 hover:text-blue-900 flex items-center" to="/contact#contact" onClick={() => closeMenu?.()}>
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo" onClick={() => closeMenu?.()}>
                Demo our products
            </HashLink>
        </>
    )
}

export default NavLinks;
