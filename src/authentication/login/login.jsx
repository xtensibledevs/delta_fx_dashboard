import "./login.css";
import showIcon from "../../assets/eye.svg";
import hideIcon from "../../assets/eye-hide.svg";
import helloIcon from "../../assets/hello.jpg";
import loginBackground from "../../assets/login.jpg";
import Navbar from "../../utils/navbar/navbarAuth";
import { useState } from "react";
export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  function validateEmail(inputEmail) {
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailCheck.test(inputEmail) && inputEmail !== "") {
      document.querySelector(".error").style.display = "block";

      if (!inputEmail.includes("@") && !inputEmail.includes(".")) {
        setEmailError("Invalid email");
      } else if (!inputEmail.includes("@")) {
        setEmailError("Invalid email");
      } else if (!inputEmail.includes(".")) {
        setEmailError("Invalid email");
      } else {
        setEmailError("**Invalid Email");
      }
    } else {
      document.querySelector(".error").style.display = "none";
      setEmailError("");
      setEmail(inputEmail);
    }
  }
  function show() {
    setShowPassword(!showPassword);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!");
  };
  return (
    <div className=" bg-slate-100">
      <Navbar />
      <div className="flex flex-row items-center h-screen my-auto justify-center">
        <div
          className="text-white p-8 rounded shadow-md w-96 h-96 flex flex-col justify-center align-middle text-center"
          style={{
            background: `url(${loginBackground})`,
            backgroundSize: "cover",
          }}
        >
          <img src={helloIcon} className="w-72 m-auto"></img>
          <p className="font-semibold">Nice to see you again</p>
          <h1 className="font-bold text-3xl text-blue-400">Welcome back</h1>
        </div>
        <div className="bg-white p-8 rounded shadow-md w-96 h-96">
          <h2 className=" mb-4 font-bold text-2xl text-blue-900">Login</h2>
          <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 border w-full rounded outline-none"
                maxLength={50}
                onChange={(e) => validateEmail(e.target.value)}
                required
              />
              <div className="error absolute hidden error h-10 m-[-10px 0] text-xs text-red-900">
                Invalid Email
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <div className="flex flex-row relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="pass"
                    name="pass"
                    className="mt-1 p-2 border w-full rounded outline-none"
                    maxLength={35}
                    required
                  />
                  <img
                    src={showPassword ? hideIcon : showIcon}
                    onClick={() => show()}
                    className="absolute top-3 right-2 cursor-pointer"
                    alt={showPassword ? "Hide Password" : "Show Password"}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white p-2 rounded hover:bg-blue-900 transition-colors w-full"
              onClick={(e) => e.preventDefault()}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
