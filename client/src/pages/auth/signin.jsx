import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const [message, setMessage] = useState(""); 
   
   useEffect(()=>{
       const token = localStorage.getItem("token");
       if (token){
        nav("/home");
       }
    },[])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
  
    try {
      const response = await axios.post("http://localhost:3000/api/check", {
        email: formData.email,
        password: formData.password,
      });
  
      if (response.data.success) {
        setMessage(response.data.message);
        localStorage.setItem("token", response.data.token); 
        nav('/home')
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div
        style={{ animation: "slideInFromLeft 1s ease-out" }}
        className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
      >
        <h2 className="text-center text-4xl font-extrabold text-white">Welcome</h2>
        <p className="text-center text-blue-900 font-bold">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-black text-black bg-transparent placeholder-transparent focus:outline-none focus:border-white"
              required
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label
              className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              htmlFor="email"
            >
              Email address
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-black text-black bg-transparent placeholder-transparent focus:outline-none focus:border-white"
              required
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label
              className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                className="form-checkbox h-4 w-4 text-blue-600 bg-gray-800 border-gray-300 rounded"
                type="checkbox"
              />
              <span className="ml-2 text-blue-800 font-semibold">Remember me</span>
            </label>
          </div>

          {/* Sign-In Button */}
          <button
            className="w-full py-2 px-4 bg-white hover:bg-gray-200 rounded-md shadow-lg text-blue-500 font-semibold transition duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>

        {/* Display login message */}
        {message && <p className="text-center text-red-500">{message}</p>}

        {/* Sign-Up Link */}
        <div className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-700 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
