import React, { useState } from "react";

const LoginRegistrationForm = () => {
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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    //registration logic here
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    //login logic here
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
      <div className="pt-8">
        {activeTab === "login" ? (
          <div className="container flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="mb-6 flex flex-col" onSubmit={handleLoginSubmit}>
              <input
                className="input mb-4"
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginInputChange}
              />
              <input
                className="input mb-4"
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginInputChange}
              />
              <button
                className="btn bg-greyblue3 rounded-sm mt-[40px]"
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
              className="mb-6 flex flex-col"
              onSubmit={handleRegisterSubmit}
            >
              <input
                className="input mb-4"
                type="text"
                name="username"
                placeholder="Username"
                value={registerData.username}
                onChange={handleRegisterInputChange}
              />
              <input
                className="input mb-4"
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterInputChange}
              />
              <input
                className="input mb-4"
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterInputChange}
              />
              <button className="btn bg-greyblue3 rounded-sm" type="submit">
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
