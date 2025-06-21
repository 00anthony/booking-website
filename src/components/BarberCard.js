import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BarberCard = ({
  name = 'Unnamed Barber',
  profilePic = 'https://via.placeholder.com/150',
  workPics = [],
  instagram = '#',
  tiktok = '#',
  bookLink = '#',
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
      <img
        src={profilePic}
        alt={`${name}'s profile`}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Array.isArray(workPics) && workPics.map((pic, idx) => (
          <img
            key={idx}
            src={pic}
            alt={`cut ${idx + 1}`}
            className="w-full h-20 object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="flex gap-4 text-xl mb-4">
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
          <FaInstagram />
        </a>
        <a href={tiktok} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800">
          <FaTiktok />
        </a>
      </div>
      <Link
        to={bookLink}
        className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
      >
        Book Now
      </Link>
    </div>
  );
};

export default BarberCard;
