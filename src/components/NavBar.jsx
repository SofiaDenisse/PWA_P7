import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  // Usamos useLocation para saber en qué página estamos y resaltar el enlace activo
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="p-4 sticky top-0 z-50 flex justify-center">
      <ul className="flex items-center justify-center space-x-8 text-lg font-semibold bg-white/40 backdrop-blur-lg rounded-full px-8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/60">
        <li>
          <Link 
            to="/" 
            className={`transition-all duration-300 hover:text-[#B44446] ${
              isActive('/') ? 'text-[#B44446] border-b-2 border-[#FC8F8F]' : 'text-[#64242F]'
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={`transition-all duration-300 hover:text-[#B44446] ${
              isActive('/about') ? 'text-[#B44446] border-b-2 border-[#FC8F8F]' : 'text-[#64242F]'
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/gallery" 
            className={`transition-all duration-300 hover:text-[#B44446] ${
              isActive('/gallery') ? 'text-[#B44446] border-b-2 border-[#FC8F8F]' : 'text-[#64242F]'
            }`}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;