import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import bgImg from '../images/faded-headquartes-toast-hero.jpg';


const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                {/* Background image */}
                <img
                    src={bgImg}
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    alt="Background"
                />
                {/* overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />
                <div>
                    <NavBar />
                </div>
                <section className="relative z-10 h-screen w-full flex flex-col justify-start sm:justify-center pt-20 sm:pt-0 ">
                    <svg
                        viewBox="0 0 1000 500"
                        className="overflow-visible w-[90%] max-w-[1000px] h-auto mx-auto -mt-4 lg:-mt-40"
                        xmlns="http://www.w3.org/2000/svg"
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
                </section>                   
            </div>
        </>
    )
}
{/* Learn more button
                        <Link
                        to="/contact"
                        className="relative z-10 text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                    >
                        Learn more
                        <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </Link> */}
export default Hero;