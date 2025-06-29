// src/components/BookingSection.jsx
import React from 'react';
import SectionHeader from './SectionHeader';
import BarberCard from './BarberCard';

const barbers = [
  {
    name: 'JJ',
    profilePic: '/barbers/JJ/profile.avif',
    workPics: ['/barbers/JJ/drop-design.avif', '/barbers/JJ/drop-beard.mp4', '/barbers/JJ/taper-design.avif', '/barbers/JJ/drop.avif'],
    instagram: 'https://instagram.com/jaythebarber',
    tiktok: 'https://tiktok.com/@jaythebarber',
    bookLink: '/book/jay',
  },
  {
    name: 'Los',
    profilePic: '/barbers/los/profile.avif',
    workPics: ['/cuts/manny1.mp4', '/cuts/manny2.jpg'],
    instagram: 'https://instagram.com/mannyfades',
    tiktok: 'https://tiktok.com/@mannyfades',
    bookLink: '/book/manny',
  },
  {
    name: 'Nelson',
    profilePic: '/barbers/nelson/profile.avif',
    workPics: ['/cuts/sam1.jpg', '/cuts/sam2.jpg', '/cuts/sam3.mp4'],
    instagram: 'https://instagram.com/samanthacuts',
    tiktok: 'https://tiktok.com/@samanthacuts',
    bookLink: '/book/samantha',
  },
];

const BookingSection = () => {
  return (
    <section 
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      id="booking"
    >
      <div data-aos="zoom-in" data-aos-delay="500">
        <SectionHeader
        title="Booking"
      />
      </div>
      
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        data-aos="fade-up" data-aos-delay="500"
      > 
        {barbers.map((barber, idx) => (
          <BarberCard key={idx} {...barber} />
        ))}
      </div>
    </section>
  );
};

export default BookingSection;
