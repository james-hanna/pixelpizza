import React, { useState } from "react";
import { registerUser, loginUser } from "../api";
import { useNavigate } from "react-router-dom";

const LoginRegistrationForm = () => {
  const navigate = useNavigate();
  const [newError, setNewError] = useState(null);
  const [activeTab, setActiveTab] = useState("login");
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Registration Logic
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the registerUser API function
      const response = await registerUser(registerData);
      // If registration is successful
      console.log("Registration successful!", response);
      setNewError(response.message);
      setTimeout(() => {
        setNewError(null);
        handleTabClick("login");
      }, 3000);
    } catch (error) {
      console.error("Registration failed!", error);
      setNewError(error.response.data.error);
    }
  };

  //Login Logic
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(loginData);
      const { token } = response;

      // Store the token in localStorage
      localStorage.setItem("token", token);
      console.log(localStorage.token);
      setNewError(null);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Login failed!", error);
    }
  };

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="xsm:w-[300px] sm:w-[325px] md:w-[450px] mx-auto mt-40 bg-greyblue rounded-lg">
      <div className="">
        <nav className="-mb-px flex">
          <button
            className={`w-1/2 py-4 px-6 font-medium text-sm lg:text-lg xl:text-2xl 2xl:text-4xl rounded-tl-lg focus:outline-none ${
              activeTab === "login"
                ? " border-2 border-b-0 border-slate-600"
                : "text-gray-500 hover:text-gray-700 border-b-2 border-slate-600 bg-greyblue3"
            }`}
            onClick={() => handleTabClick("login")}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-4 px-6 font-medium text-sm lg:text-lg xl:text-2xl 2xl:text-4xl rounded-tr-lg focus:outline-none ${
              activeTab === "register"
                ? " border-2 border-b-0 border-slate-600"
                : "text-gray-500 hover:text-gray-700 border-b-2 border-slate-600 bg-greyblue3"
            }`}
            onClick={() => handleTabClick("register")}
          >
            Register
          </button>
        </nav>
      </div>
      <div className="pt-8 border-2 border-t-0 border-slate-600 rounded-b-lg">
        {activeTab === "login" ? (
          <div className="container flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form
              className="mb-6 flex flex-col w-[250px]"
              onSubmit={handleLoginSubmit}
            >
              <input
                className="input mb-4 text-center rounded-md"
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginInputChange}
              />
              <input
                className="input mb-4 text-center rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginInputChange}
              />
              {newError && (
                <p className="text-red-500 mb-4 text-center">{newError}</p>
              )}
              <button
                className="btn bg-greyblue3 rounded-md mt-[40px] border-2 border-slate-600"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="container flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Registration</h2>
            <form
              className="mb-6 flex flex-col w-[250px] "
              onSubmit={handleRegisterSubmit}
            >
              <input
                className="input mb-4 text-center rounded-md "
                type="text"
                name="username"
                placeholder="Username"
                value={registerData.username}
                onChange={handleRegisterInputChange}
              />
              <input
                className="input mb-4 text-center rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterInputChange}
              />
              <input
                className="input mb-4 text-center rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterInputChange}
              />
              {newError && newError === "Username or email already exists" && (
                <p className="text-red-500 mb-4 text-center">{newError}</p>
              )}
              {newError && newError === "Registration successful" && (
                <p className="text-green-500 mb-4 text-center">{newError}</p>
              )}
              <button
                className="btn bg-greyblue3 rounded-md border-2 border-slate-600 shadow-md"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegistrationForm;
