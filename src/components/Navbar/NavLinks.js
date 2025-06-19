import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ closeMenu }) => {
    return (
        <>
            <HashLink className="px-4 py-2 font-extrabold text-white hover:text-[#8B4000] flex items-center" smooth to="/#about"  onClick={() => closeMenu?.()}>
                About
            </HashLink>
            <HashLink className="px-4 py-2 font-extrabold text-white hover:text-[#8B4000] flex items-center" smooth to="/#services" onClick={() => closeMenu?.()}>
                Services
            </HashLink>
            <HashLink className="px-4 py-2 font-extrabold text-white hover:text-[#8B4000] flex items-center" to="/portfolio#portfolio" onClick={() => closeMenu?.()}>
                Models
            </HashLink>
            <HashLink className="px-4 py-2 font-extrabold text-white hover:text-[#8B4000] flex items-center" to="/contact#contact" onClick={() => closeMenu?.()}>
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-[#7A1B1B] hover:bg-[#9e1111] inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo" onClick={() => closeMenu?.()}>
                Get Faded
            </HashLink>
        </>
    )
}

export default NavLinks;
