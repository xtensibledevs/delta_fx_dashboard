import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-700 p-4 px-10 fixed w-screen z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between  items-center">
        <Link className="text-white text-xl flex justify-between md:items-center md:w-80 w-full px-5 md:px-0 ">
          <i
            className="fas fa-triangle my-auto cursor-pointer"
            onClick={() => navigate("/")}
          ></i>
          <h1
            className="text-center  my-auto hidden md:flex cursor-pointer"
            onClick={() => navigate("/")}
          >
            Delta Functions | Xtensible Devs
          </h1>
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </Link>

        <div
          className={`mt-4 md:mt-0 md:flex md:items-center ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <Link
                to="/"
                className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => navigate("/login")}
                className="ml-0 md:ml-8 p-2 rounded text-black font-semibold bg-white hover:bg-opacity-75 transition-colors"
              >
                Login
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => navigate("/signup")}
                className="p-2 rounded text-black font-semibold bg-white hover:bg-opacity-75 transition-colors"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
