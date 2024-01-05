export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-xl flex gap-5 justify-center items-center">
            <i className="fas fa-triangle"></i>
            <h1 className="">Delta Functions | Developer Console</h1>
          </a>

          <div>
            <ul className="flex flex-1 space-x-4">
              <li>
                <a
                  href="#"
                  className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
                >
                  <i className="fas fa-rocket fa-lg"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="py-2 px-3 rounded text-white font-semibold bg-blue-800 hover:bg-blue-900 transition-colors"
                >
                  <span className="mr-2">Console</span>
                  <i className="fas fa-terminal"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
                >
                  <i className="fas fa-comment-alt"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
                >
                  <i className="fas fa-cog fa-lg"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="p-2 rounded text-white font-semibold hover:bg-blue-900 transition-colors"
                >
                  <i className="fas fa-question-circle fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
