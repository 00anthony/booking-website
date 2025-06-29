import React from 'react';
import { Helmet } from 'react-helmet';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Products';
import Services from '../components/Services';
import BookingSection from '../components/BookingSection';

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Ants Booking | Home</title>
                <meta name="description" content="Book your appointments with Ants Booking - fast, simple, reliable." />
            </Helmet>
            <Hero />
            <Intro />
            <BookingSection />
            <Footer />
        </>

    )
}

export default Home;

