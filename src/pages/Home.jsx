import React from 'react';
import { Helmet } from 'react-helmet';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import BarberGrid from '../components/BarberGrid';
import SectionHeader from '../components/SectionHeader';

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Ants Booking | Home</title>
                <meta name="description" content="Book your appointments with Ants Booking - fast, simple, reliable." />
            </Helmet>
            <Hero />
            <Intro />
            <SectionHeader
                title="Our Barbers"
                subtitle="Browse the talent. Tap a photo to preview their work."
                className="bg-gray-500"
            />
            <BarberGrid />
            <Services />
            <Portfolio />
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

