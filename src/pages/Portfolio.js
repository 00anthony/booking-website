import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const barbers = {
  "Anthony": [
    "/images/anthony1.jpg",
    "/images/anthony2.jpg",
    "/images/anthony3.jpg",
  ],
  "Jessica": [
    "/images/jessica1.jpg",
    "/images/jessica2.jpg",
    "/images/jessica3.jpg",
  ],
  "Mike": [
    "/images/mike1.jpg",
    "/images/mike2.jpg",
    "/images/mike3.jpg",
  ],
};

const Portfolio = () => {
    const [selectedBarber, setSelectedBarber] = useState(null);
   
    const projects = [
        { title: 'Haircut #1', image: '/images/cut1.jpg' },
        { title: 'Fade #2', image: '/images/fade2.jpg' },
        { title: 'Beard Trim', image: '/images/beard.jpg' },
    ];

    return (
        <>
            <Helmet>
                <title>Ants Booking | Portfolio</title>
                <meta name="description" content="Book your appointments with Ants Booking - fast, simple, reliable." />
            </Helmet>
            <div>
                <NavBar />
            </div>
            <div className="min-h-screen p-8 bg-gray-100 text-center">
                <h1 className="text-4xl font-bold text-blue-900 mb-6">Choose a Barber</h1>
                <div className="flex justify-center gap-6 mb-10">
                    {Object.keys(barbers).map((barber) => (
                    <button
                        key={barber}
                        onClick={() => setSelectedBarber(barber)}
                        className={`px-6 py-2 rounded-lg font-semibold ${
                        selectedBarber === barber ? "bg-blue-900 text-white" : "bg-white border"
                        } hover:bg-blue-800 hover:text-white transition`}
                    >
                        {barber}
                    </button>
                    ))}
                </div>

                {selectedBarber && (
                    <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">{selectedBarber}'s Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {barbers[selectedBarber].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`${selectedBarber} cut ${index + 1}`}
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                        ))}
                    </div>
                    </div>
                )}
            </div>
            <Footer />
        </>


    )
}

export default Portfolio;