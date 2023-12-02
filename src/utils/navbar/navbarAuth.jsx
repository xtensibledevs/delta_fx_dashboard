import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-700 p-4 fixed w-screen ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl flex space-between">
          <i className="fas fa-triangle m-auto"></i>
          <h1 className="text-center w-80 m-auto">
            Delta Functions | Xtensible Devs
          </h1>
        </a>

        <div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/login")}
                className="ml-8 p-2 rounded text-black font-semibold bg-white hover:bg-opacity-75 transition-colors"
              >
                Login
              </a>
            </li>
            <li>
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
