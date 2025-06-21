import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavBar from '../components/Navbar/NavBar';
import btnImg from '../images/Logo.jpg';
import WaxButton from './WaxBtn';
import BarberCard from './BarberCard';
import Background from '../images/background.jpg';


const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                {/* Background image */}
                <div
                    style={{
                    backgroundImage: `url(${Background})`,
                    }}
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-0"
                />
                {/* overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />
                <div>
                    <NavBar />
                </div>
                <section className=" relative z-10 min-h-screen flex flex-col items-center justify-start sm:justify-center pt-20 sm:pt-0 " >
                    {/*Header*/}
                    <svg
                        viewBox="0 0 1000 500"
                        className="overflow-visible w-[90%] max-w-[1000px] h-auto mx-auto -mt-4 lg:-mt-20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-aos="fade-up"
                    >
                        <defs>
                            <path
                                id="arcPath"
                                d="M 100,250 A 400,200 0 0,1 900,250"
                                fill="none"
                            />
                        </defs>
                        <text
                        fill="white"
                        fontSize="120"
                        className="font-gotisch fill-white"
                        textAnchor="middle"
                        fontFamily="'Grenze Gotisch', serif"
                        >
                            <textPath href="#arcPath" startOffset="50%">
                                faded headquarters
                            </textPath>
                        </text>
                    </svg>
                    {/*Choose Button */}
                    <HashLink 
                        smooth to="/#about" 
                        className="font-gotisch text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center px-6 py-2 -mt-12 md:-mt-28 md:text-2xl text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                        book haircut
                        <svg 
                            className="w-4 h-4 ml-1 group-hover: translate-x-2"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor">
                            <path 
                                fillRule="evenodd" 
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                clipRule="evenodd">
                            </path>
                        </svg>
                    </HashLink>
                    {/*<WaxButton/>*/}
                </section>                   
            </div>
        </>
    )
}

export default Hero;