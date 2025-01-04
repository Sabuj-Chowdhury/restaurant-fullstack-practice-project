import { Link } from "react-router-dom";
import authBg from "../assets/others/authentication.png";
import authImg from "../assets/others/authentication2.png";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";

const Login = () => {
  const [captchaError, setCaptchaError] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6); // Generate a 6-character captcha
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captchaInput = form.captcha.value;

    // Validate Captcha
    if (validateCaptcha(captchaInput)) {
      setCaptchaError("");
    } else {
      setCaptchaError("Invalid captcha. Please try again.");
    }
  };

  return (
    <section
      style={{ backgroundImage: `url("${authBg}")` }}
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="shadow-2xl rounded-lg flex overflow-hidden max-w-4xl w-full">
        {/* Image Section */}
        <div className="hidden w-1/2 md:flex items-center justify-center">
          <img
            src={authImg}
            alt="Authentication Illustration"
            className="w-3/4"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Captcha */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">
                Captcha
              </label>
              <div className="flex items-center gap-4">
                <LoadCanvasTemplate />
              </div>
              <input
                name="captcha"
                type="text"
                placeholder="Type here"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {captchaError && (
                <p className="text-red-500 text-sm mt-2">{captchaError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-2 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-600 transition"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            New here?{" "}
            <Link to="/register" className="text-orange-500 hover:underline">
              Create a New Account
            </Link>
          </p>

          {/* Social Login */}
          <div className="mt-6">
            <p className="text-center text-gray-500 mb-4">Or sign in with</p>
            <div className="flex justify-center gap-4">
              <button className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaGoogle size={24} />
              </button>
              <button className="text-gray-800 hover:text-black">
                <FaGithub size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
