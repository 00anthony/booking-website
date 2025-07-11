import React from 'react';
import { Link } from 'react-router-dom';

const WaxButton = () => {
    const text = "Book Now • ";
  return (
    <div className="absolute md:mt-[-200px] pt-20 ">
      <Link
        to="/contact"
      >
        <button className="group relative w-24 h-24 md:w-36 md:h-36 rounded-full bg-none shadow-lg focus:outline-none  hover:scale-105">
          {/* Wax Shape */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <svg
                  className="overflow-visible w-28 h-28 md:w-44 md:h-44"
                  width="800"
                  height="800"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  fill="#7A1B1B"
                  d="M283.406 26c-31.262-.124-67.23 14.174-87.406 24.813-14.187 7.48-63.924 37.248-106.594 45.5-55.05 10.643-86.878 63.63-54.594 90.156 53.676 44.1 55.533 101.236 15.844 143.186-43.832 46.33 1.16 113.166 63.844 105.625 62.685-7.54 89.117.543 121.03 32.44 41.408 41.38 131.457 24.757 153.595-32.595 10.275-26.614 24.304-56.372 58.594-68.563 40.316-14.328 52.335-59.373 26.217-90.625-19.376-23.183-21.61-47.184 4.875-95.468 21.756-39.664 4.657-83.827-55.937-80.44-45.002 2.515-64.425-27.456-97.156-59.374C314.866 30.074 299.78 26.066 283.405 26zm-20.312 76.188c87.992 0 159.53 71.508 159.53 159.5 0 87.994-71.538 159.53-159.53 159.53s-159.53-71.536-159.53-159.53c0-87.995 71.538-159.5 159.53-159.5zm0 18.687c-77.892 0-140.813 62.918-140.813 140.813 0 77.894 62.922 140.843 140.814 140.843 77.89 0 140.844-62.948 140.844-140.842 0-77.892-62.953-140.813-140.844-140.813zm-9.344 19.188h18.688v12.562l32.218 9.78-32 9.72h-.78v97.47H253.75V172.53l-33.344-10.124 33.344-10.125v-12.218zm-51.875 40.343c9.892-.023 20.71 2.28 32.313 7.156v20.594c-14.94-7.682-27.267-9.843-36.657-8.844-11.21 1.194-18.696 6.513-23.468 14.125-9.34 14.902-7.106 39.607 13.907 56.157h-25.657c-14.936-20.91-15.937-47.15-4.063-66.094 7.603-12.13 20.8-20.992 37.313-22.75 2.064-.22 4.16-.34 6.312-.344zm122.438 0c2.153.005 4.28.124 6.343.344 16.513 1.758 29.71 10.62 37.313 22.75 11.872 18.944 10.872 45.183-4.064 66.094H338.22c21.01-16.55 23.245-41.255 13.905-56.156-4.77-7.613-12.258-12.932-23.47-14.125-9.69-1.032-22.498 1.294-38.092 9.593v-20.75c12.145-5.308 23.443-7.774 33.75-7.75zm-71.438 16.875c.052.034.104.063.156.095l-.155.25v-.344zm-81.563 91h183.563v18.44h-34.28v17.81h34.28v18.69H171.312v-18.69h36.47v-17.81h-36.47v-18.44zm55.157 18.44v17.81h27.28v-17.81h-27.28zm45.968 0v17.81h29.468v-17.81h-29.47zm-9.157 50.03c7.64 0 13.845 6.204 13.845 13.844s-6.204 13.844-13.844 13.844-13.842-6.204-13.842-13.844 6.203-13.844 13.843-13.844zM457 410.5c-7.208.234-14.82 2.62-21.5 7.688-34.04 25.825-9.88 74.987 31.938 40.437 32.292-26.678 13.11-48.89-10.438-48.125z"
                  />
                  <ellipse
                  fill="#7A1B1B"
                  cx="262.66766"
                  cy="261.89697"
                  rx="164.05412"
                  ry="160.59041"
                  />
                  
              </svg>
          </div>

          {/* Circular Text */}
          <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 200 200">
              <defs>
              <path
                  id="textCircle"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
              />
              </defs>
              <text fill="#b52425" fontSize="17" fontFamily="sans-serif" letterSpacing="2">
              <textPath href="#textCircle" startOffset="3%">
                  {text.repeat(4)}
              </textPath>
              </text>
          </svg>

          {/* Center Image */}
          <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              className='w-16 h-16 md:w-24 md:h-24'
              width="150.000000pt" 
              height="150.000000pt" 
              viewBox="0 0 150.000000 150.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
              fill="#911" stroke="none">
              <path d="M625 1381 c-3 -6 -31 -24 -63 -42 -31 -18 -58 -33 -60 -34 -1 -1 4
              -15 13 -31 20 -38 19 -51 -3 -57 -11 -2 -21 -14 -25 -26 -4 -17 -1 -21 19 -21
              l24 0 0 -263 c0 -195 -3 -266 -12 -275 -10 -10 -6 -18 17 -37 37 -30 43 -30
              80 0 27 22 28 25 13 42 -12 14 -16 43 -17 123 -2 105 -2 106 28 134 26 25 33
              27 46 16 14 -11 15 -51 13 -319 -2 -168 -7 -314 -12 -324 -6 -13 -4 -17 10
              -17 10 0 28 -10 41 -22 l23 -22 55 54 55 54 0 -84 c-1 -47 -7 -103 -15 -125
              -8 -21 -12 -42 -9 -45 3 -3 20 11 38 31 l33 35 26 -20 c33 -24 44 -16 22 17
              -13 21 -15 54 -13 228 2 112 7 211 11 221 7 13 2 18 -25 23 -18 4 -50 16 -71
              26 -35 18 -39 18 -62 3 l-25 -16 0 150 c0 118 3 154 15 165 15 16 10 27 -14
              27 -8 0 -25 10 -38 22 l-23 22 -48 -47 c-26 -26 -51 -47 -54 -47 -4 0 -6 61
              -6 135 l1 135 32 0 c24 0 35 6 43 25 11 24 11 25 -29 25 -23 0 -41 5 -43 13
              -12 45 -23 97 -20 97 2 0 22 -10 45 -22 l42 -21 28 34 c34 41 36 53 9 44 -12
              -4 -31 0 -45 9 -28 18 -41 20 -50 7z m205 -821 l40 -20 0 -103 c0 -100 -1
              -104 -27 -129 -24 -23 -31 -25 -45 -14 -16 11 -18 31 -18 150 0 75 2 136 5
              136 3 0 24 -9 45 -20z"/>
              </g>
              </svg>
        </div>
      </button>
    </Link>
  </div>
  );
};

export default WaxButton;