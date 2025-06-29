import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h1 className="text-4xl text-black uppercase">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-gray-600">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-24 border-b-4 border-black"></div>
    </div>
  );
};

export default SectionHeader;
