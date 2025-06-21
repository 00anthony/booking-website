import React from 'react';
import { Link } from 'react-router-dom';
import About from '../images/About.jpg';
const Intro = () => {
    return (
        <>
            <section className="bg-gray-100 text-center m-auto p-2 md:p-12 h-5/6" id='about' >

                <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row py-8 justify-between" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="card img" className="rounded-t float-right" src={About} />
                    </div>
                    <div className="flex-col my-4 text-center lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                        
                        <h3 className="text-3xl  text-red-900 font-bold">About Us</h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'> At Faded Headquarters, our mission is simple: provide top-tier cuts, clean fades, and an experience that keeps
                                you coming back. Rooted in the culture and creativity of the Austin and San Marcos area, we blend traditional
                                barbering with a fresh, modern vibe. Whether you’re coming in for a quick lineup or a full transformation,
                                we’re here to help you look sharp and feel confident—every time.
                            </p>
                        </div>
                        
                        <Link to="/contact" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                            Contact us
                            <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro;