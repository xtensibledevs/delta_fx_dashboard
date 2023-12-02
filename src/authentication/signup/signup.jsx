import zxcvbn from "zxcvbn";
import "./signup.css";
import Navbar from "../../utils/navbar/navbarAuth";
import showIcon from "../../assets/eye.svg";
import loginBackground from "../../assets/login.jpg";
import hideIcon from "../../assets/eye-hide.svg";
import helloIcon from "../../assets/hello.jpg";

import { useState } from "react";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const [passwordMatchError, setPasswordMatchError] =
    useState("Password Matched");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({
      ...formData,
      password: newPassword,
    });

    if (formData.confirmPassword !== newPassword) {
      document.querySelector(".matchError").style.display = "block";
      setPasswordMatchError("Passwords do not match");
    } else {
      document.querySelector(".matchError").style.display = "none";
      setPasswordMatchError("");
    }

    const result = zxcvbn(newPassword);

    setPasswordStrength(
      result.score === 0
        ? "Weak"
        : result.score === 1
        ? "Fair"
        : result.score === 2
        ? "Good"
        : "Strong"
    );
  };
  function validateEmail(inputEmail) {
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailCheck.test(inputEmail) && inputEmail !== "") {
      document.querySelector(".emailError").style.display = "block";

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
      document.querySelector(".emailError").style.display = "none";
      setEmailError("");
      setEmail(inputEmail);
    }
  }

  function validateUsername(inputUsername) {
    const usernameCheck = /^[a-zA-Z0-9_]{3,20}$/;

    if (!usernameCheck.test(inputUsername) && inputUsername !== "") {
      document.querySelector(".usernameError").style.display = "block";
      setUsernameError("Invalid username");
    } else {
      document.querySelector(".usernameError").style.display = "none";
      setUsernameError("");
      setUsername(inputUsername);
    }
  }

  function validateFirstName(inputFirstName) {
    const nameCheck = /^[a-zA-Z]{2,}$/;

    if (!nameCheck.test(inputFirstName) && inputFirstName !== "") {
      document.querySelector(".firstError").style.display = "block";
      setFirstNameError("Invalid first name");
    } else {
      document.querySelector(".firstError").style.display = "none";
      setFirstNameError("");
      setFirstName(inputFirstName);
    }
  }

  function validateLastName(inputLastName) {
    const nameCheck = /^[a-zA-Z]{2,}$/;

    if (!nameCheck.test(inputLastName) && inputLastName !== "") {
      document.querySelector(".lastError").style.display = "block";
      setLastNameError("Invalid last name");
    } else {
      document.querySelector(".lastError").style.display = "none";
      setLastNameError("");
      setLastName(inputLastName);
    }
  }
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setFormData({
      ...formData,
      confirmPassword: newConfirmPassword,
    });

    if (formData.password !== newConfirmPassword) {
      document.querySelector(".matchError").style.display = "block";
      setPasswordMatchError("Passwords do not match");
    } else {
      document.querySelector(".matchError").style.display = "none";
      setPasswordMatchError("");
    }
  };

  return (
    <>
      <div className=" bg-slate-100 overflow-hidden">
        <Navbar />
        <div className="flex flex-row items-center my-auto justify-center align-middle pt-10 h-screen ">
          <div
            className="  w-96 rounded shadow-md"
            style={{
              background: `url(${loginBackground})`,
              backgroundSize: "cover",
            }}
          >
            <img src={helloIcon} className="w-72 h-86 m-auto mt-20 "></img>
            <h1 className="text-center mt-11 font-bold text-blue-200 text-xl">Welcome to the website</h1>
            <p className="text-center mt-4 mb-8 p-2 text-white">
              Thank you for joining our community. We &apos; re excited to have you on
              board and explore all that our website has to offer.
            </p>

            {/* <div className="text-center">
              <h2>What You'll Find Here:</h2>
              <p>
                🌐 <strong>Discover:</strong> Explore a diverse range of content
                and information tailored just for you.
              </p>
              <p>
                🚀 <strong>Engage:</strong> Connect with like-minded
                individuals, share your thoughts, and be part of the
                conversation.
              </p>
              <p>
                🎉 <strong>Exclusive Features:</strong> Unlock special features
                and benefits by becoming a member. Sign up today to get started!
              </p>
            </div> */}
          </div>
          <div className="bg-white p-7 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <form action="{{ url_for('auth_login') }}" method="post">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => validateUsername(e.target.value)}
                  className="mt-1 p-2 border w-full rounded outline-none"
                  required
                />
                <div className="absolute hidden usernameError h-10 m-[-10px 0] text-xs text-red-900">
                  Invalid Username
                </div>
              </div>
              <div className="mb-4 flex space-x-2">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_anme"
                    name="first_name"
                    className="mt-1 p-2 border w-full rounded outline-none"
                    onChange={(e) => validateFirstName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                  <div className="absolute hidden  firstError h-10 m-[-10px 0] text-xs text-red-900">
                    Invalid First Name
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="mt-1 p-2 border w-full rounded outline-none"
                    onChange={(e) => validateLastName(e.target.value)}
                    required
                    autoComplete="family-name"
                  />
                  <div className="absolute hidden  lastError h-10 m-[-10px 0] text-xs text-red-900">
                    Invalid Last Name
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 border w-full rounded outline-none"
                  onChange={(e) => validateEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                <div className="absolute hidden emailError h-10 m-[-10px 0] text-xs text-red-900">
                  Invalid Email
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <div className="flex flex-row relative ">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="pass"
                    name="pass"
                    onChange={handlePasswordChange}
                    className="mt-1 p-2 border w-full rounded outline-none"
                    maxLength={35}
                    required
                  />

                  <img
                    src={showPassword ? hideIcon : showIcon}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-2 cursor-pointer m-auto"
                    alt={showPassword ? "Hide Password" : "Show Password"}
                  />
                </div>
                <div className="flex justify-center">
                  <progress
                    className={`w-full h-2 p-1  ${
                      passwordStrength === "Weak"
                        ? "bg-red-500 "
                        : passwordStrength === "Fair"
                        ? "bg-yellow-500"
                        : passwordStrength === "Good"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                    value={
                      passwordStrength === "Weak"
                        ? 25
                        : passwordStrength === "Fair"
                        ? 50
                        : passwordStrength === "Good"
                        ? 75
                        : 100
                    }
                    max="100"
                  ></progress>
                </div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 mt-4 "
                >
                  Confirm Password
                </label>
                <div className="flex flex-row relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="pass"
                    name="pass"
                    className="mt-1 p-2 border w-full rounded outline-none"
                    maxLength={35}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  <img
                    src={showConfirmPassword ? hideIcon : showIcon}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-3 right-2 cursor-pointer m-auto"
                    alt={
                      showConfirmPassword ? "Hide Password" : "Show Password"
                    }
                  />
                </div>
                <div className="absolute hidden matchError h-10 m-[-10px 0] text-xs text-red-900">
                  {passwordMatchError}
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white p-2 rounded hover:bg-blue-900 transition-colors w-full mt-8"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
