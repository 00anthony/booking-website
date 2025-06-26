import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavBar from './Navbar/NavBar';
import WaxButton from './WaxBtn';
import Background from '/images/hero-frame.png';

const Hero = () => {
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
    const isWide = window.innerWidth > 768;
    const connection = navigator.connection || navigator.webkitConnection;

    const isSaveData = connection?.saveData === true;

    // 💡 Logic:
    // Load video on desktop always
    // On mobile, only if Save Data is not enabled
    if (isWide || (!isWide && !isSaveData)) {
        const timeout = setTimeout(() => {
        setShouldLoadVideo(true);
        }, 500);
        return () => clearTimeout(timeout);
    }
    }, []);

    const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    };
    return (
        <>
            <div className="hero relative w-full h-screen overflow-hidden" id='hero'>
                {/* Static background image (always loads first, fades out later) */}
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-0 transition-opacity duration-1000 ${
                    isVideoLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ backgroundImage: `url(${Background})` }}
                />

                {/* Background video (conditionally loads) */}
                {shouldLoadVideo && (
                    <video
                    className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
                        isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    src="/videos/Hero-Video.mp4"
                    poster="/images/hero-frame.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={handleVideoLoad}
                    />
                )}
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
                        className="relative z-10 font-gotisch text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center px-6 py-2 -mt-12 md:-mt-28 md:text-2xl text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
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