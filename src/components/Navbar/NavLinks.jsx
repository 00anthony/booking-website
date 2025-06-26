import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ closeMenu }) => {
    return (
        <>
        <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white"></nav>
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
            <HashLink className="font-bold text-white bg-[#7A1B1B] hover:bg-[#9e1111] inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo" onClick={() => closeMenu?.()}>
                Get Faded
            </HashLink>
        <nav/>    
        </>
    )
}

export default NavLinks;
