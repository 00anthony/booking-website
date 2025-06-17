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
                Portfolio
            </HashLink>
            <HashLink className="px-4 py-2 font-extrabold text-white hover:text-[#8B4000] flex items-center" to="/contact#contact" onClick={() => closeMenu?.()}>
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-[#8B4000] hover:bg-amber-900 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo" onClick={() => closeMenu?.()}>
                Demo our products
            </HashLink>
        </>
    )
}

export default NavLinks;
