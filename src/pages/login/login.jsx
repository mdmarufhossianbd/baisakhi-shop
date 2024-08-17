import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import authImage from "../../assets/auth-page.jpg";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../provider/authProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, user } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider;
  const navigate = useNavigate();

  // user checking
  if(user){
    navigate('/')
  }
  // login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Your account login Successfully");
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Please check your email or password");
        }
      });
  };

  // login with google
  const handleGooleLogin =() => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
        if(result.user){
            toast.success("Your account login successfully")
            navigate(location.state ? location.state : "/");
        }
    })
    .catch(error =>{
        if(error){
            toast.error(error)
        }
    })
  }
  return (
    <div className="flex min-h-screen border bg-[#f5f8fe]">
      <div className="w-full hidden md:block">
        <img
          className="w-full min-h-full object-cover"
          src={authImage}
          alt="login sidebar"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-semibold mb-5 text-center">
          Welcome to Baishakhi Shop
        </h2>
        <h3 className="text-4xl font-semibold">Login Now</h3>
        <form
          onSubmit={handleLogin}
          className="md:w-3/4 w-full flex flex-col gap-2 my-5 px-3"
        >
          <div className="flex flex-col w-full">
            <label className="font-medium">Your Email</label>
            <input
              className="px-4 py-2 rounded-md focus:outline-none placeholder:text-[#8a8a8a] w-full"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="flex flex-col w-full relative">
            <label className="font-medium">Password</label>
            <input
              className="px-4 py-2 rounded-md focus:outline-none placeholder:text-[#8a8a8a] w-full"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
            />
            {showPassword ? (
              <button onClick={() => setShowPassword(false)}>
                <IoMdEye className="absolute right-3 top-[55%] hover:cursor-pointer" />
              </button>
            ) : (
              <IoMdEyeOff
                onClick={() => setShowPassword(true)}
                className="absolute right-3 top-[55%] hover:cursor-pointer"
              />
            )}
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              className="w-1/3 bg-[#4195dd] py-2 rounded-md text-white font-medium text-lg hover:cursor-pointer hover:bg-[#3ab5d6] translate duration-200 mt-5"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div>
          <p className="my-3">
            Don&apos;t have an account?{" "}
            <Link
              to={"/register"}
              className="underline font-medium text-[#ef8121]"
            >
              Register
            </Link>
          </p>
          <button  onClick={handleGooleLogin} className="flex items-center justify-center gap-3 font-medium w-full bg-[#ef8121] hover:bg-[#fd9f4d] text-white px-5 py-2 rounded-md translate-x-0 duration-300">
            Login with <FaGoogle />
          </button>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
