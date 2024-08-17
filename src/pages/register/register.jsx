import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import authImage from "../../assets/auth-page.jpg";
import { AuthContext } from "../../provider/authProvider";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {register, updateUserProfile, setReload} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = "https://avatar.iran.liara.run/public/boy"
    // password validation

    if (password.length < 6) {
      return toast.error("Password at least 6 charaters.");
    }
    register(email, password)
    .then(result => {
        updateUserProfile(name, photo, email)
        .then(()=>{
            if(result.user){
            toast.success("Your account Create Successfully")
            navigate(location.state ? location.state : "/");
            setReload(true)
            }
        })
    })
  };

  return (
    <div className="flex min-h-screen border bg-[#f5f8fe]">
      <div className="w-full hidden md:block">
        <img
          className="w-full min-h-full object-cover"
          src={authImage}
          alt="register sidebar"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-5 px-2 text-center">
          Welcome to Baishakhi Shop
        </h2>
        <h3 className="text-4xl font-semibold mb-5">Register Now</h3>
        <form
          onSubmit={handleRegister}
          className="lg:w-3/4 w-full flex flex-col gap-2 px-4"
        >
          <div className="flex flex-col w-full">
            <label className="font-medium">Your Name</label>
            <input
              className="px-4 py-2 rounded-md focus:outline-none placeholder:text-[#8a8a8a] w-full"
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
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
              className="w-1/3 bg-[#4195dd] py-2 rounded-md text-white font-medium text-lg hover:cursor-pointer hover:bg-[#3ab5d6] translate duration-200"
              type="submit"
              value="Register"
            />
          </div>
        </form>
          <p className="mt-5">Already have an account? <Link to={'/login'} className="font-medium text-[#ef8121] underline">Login</Link></p>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Register;
