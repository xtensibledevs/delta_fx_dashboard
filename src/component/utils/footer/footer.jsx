import twitterImg from "../../../assets/icons8-twitter.svg";
import gmailImg from "../../../assets/icons8-gmail.svg";
import githubImg from "../../../assets/icons8-github.svg";
import linkedinImg from "../../../assets/icons8-linkedin.svg";

export default function Footer() {
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 border-t-2 border-black bg-gray-100 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full text-center">
          <div className="md:col-span-1 text-muted m-auto  md:mb-0 mt-20">
            <div className="flex justify-center items-center gap-4">
              <i className="fas fa-triangle fa-lg"></i>
              <h1 className="cursor-pointer text-2xl lg:text-2xl font-extrabold">
                Delta Functions
              </h1>
            </div>
            <div className="social flex gap-5 ml-4">
              <a className="cursor-pointer hover:w-10 w-8 hover:m-auto">
                <img src={twitterImg} alt="Twitter" />
              </a>
              <a className="cursor-pointer hover:w-10 w-8 hover:m-auto">
                <img src={gmailImg} alt="Gmail" />
              </a>
              <a className="cursor-pointer w-8 hover:w-10 hover:m-auto">
                <img src={linkedinImg} alt="LinkedIn" />
              </a>
              <a className="cursor-pointer hover:w-10 w-8 hover:m-auto">
                <img src={githubImg} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 text-center">
            <h5 className="text-lg">Features</h5>
            <ul className="list-unstyled text-small space-y-3">
              <li className="mb-1 ">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Serverless Framework
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  IAM & Security
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Delta Storage
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  App Kit
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Real Time Data
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Developer Tools
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 text-center">
            <h5 className="text-lg">Resources</h5>
            <ul className="list-unstyled text-small space-y-3">
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  API Reference
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  DeltaFX CLI
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 text-center">
            <h5 className="text-lg">About</h5>
            <ul className="list-unstyled text-small space-y-3">
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none hover:text-gray-400"
                  href="#"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <small className="d-block mb-3 mt-2">© 2023–2025</small>
      </footer>
    </>
  );
}
