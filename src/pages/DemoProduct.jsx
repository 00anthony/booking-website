import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import BarberGrid from '../components/BarberGrid';
import SectionHeader from '../components/SectionHeader';

const BarbersPage = () => {
  return (
    <>
      <Helmet>
        <title>Ants Booking | Demo</title>
        <meta
          name="description"
          content="Book your appointments with Ants Booking - fast, simple, reliable."
        />
      </Helmet>

      <NavBar />

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <SectionHeader
            title="Our Barbers"
            subtitle="Browse the talent. Tap a photo to preview their work."
        />
        <BarberGrid />
      </main>

      <Footer />
    </>
  );
};

export default BarbersPage;
