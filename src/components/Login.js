import Header from "./Header";
import { LOGIN_BACKGROUND_IMG_URL } from "../utils/constant";
import { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={LOGIN_BACKGROUND_IMG_URL} alt="background" />
      </div>

      <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">

        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Neftflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
