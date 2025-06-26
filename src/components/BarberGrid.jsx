import React from 'react';
import BarberCard from './BarberCard'; 

const barbers = [
  {
    name: 'Jay',
    profilePic: '/images/jay.jpg',
    workPics: ['/cuts/jay1.jpg', '/cuts/jay2.mp4', '/cuts/jay3.jpg'],
    instagram: 'https://instagram.com/jaythebarber',
    tiktok: 'https://tiktok.com/@jaythebarber',
    bookLink: '/book/jay',
  },
  {
    name: 'Manny',
    profilePic: '/images/manny.jpg',
    workPics: ['/cuts/manny1.mp4', '/cuts/manny2.jpg'],
    instagram: 'https://instagram.com/mannyfades',
    tiktok: 'https://tiktok.com/@mannyfades',
    bookLink: '/book/manny',
  },
  {
    name: 'Samantha',
    profilePic: '/images/samantha.jpg',
    workPics: ['/cuts/sam1.jpg', '/cuts/sam2.jpg', '/cuts/sam3.mp4'],
    instagram: 'https://instagram.com/samanthacuts',
    tiktok: 'https://tiktok.com/@samanthacuts',
    bookLink: '/book/samantha',
  },
];

const BarbersPage = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {barbers.map((barber, idx) => (
            <BarberCard key={idx} {...barber} />
          ))}
        </div>
      </main>

    </>
  );
};

export default BarbersPage;
