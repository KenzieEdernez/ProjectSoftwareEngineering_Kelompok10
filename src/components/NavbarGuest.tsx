interface NavbarGuestProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const NavbarGuest= ({onLoginClick, onRegisterClick}: NavbarGuestProps) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex items-center justify-between mx-20">
        <div className="flex space-x-14">
          <li className="text-white text-lg font-bold">
            <a href="/">QUICK TIX</a>
          </li>
          <div className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Now Playing</a>
            </li>
            <li>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Up Coming</a>
            </li>
            <li>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Theaters</a>
            </li>
          </div>
        </div>
        <div className="flex space-x-20">
          <div className="relative flex items-center">
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-400"></i>
            <input type="search" className="pl-10 pr-3 py-2 rounded-md text-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white w-full" placeholder="Search movies..." />
          </div>
          <div className="flex space-x-4">
            <li>
              <button onClick={onLoginClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </li>
            <li>
              <button onClick={onRegisterClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register</button>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  )
}