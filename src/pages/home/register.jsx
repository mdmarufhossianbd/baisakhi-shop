import authImage from "../../assets/auth-page.jpg";
const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }
  return (
    <div className="flex min-h-screen border bg-[#f5f8fe]">
      <div className="w-full">
        <img
          className="w-full min-h-full object-cover"
          src={authImage}
          alt="register sidebar"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-semibold mb-5">
          Welcome to Baishakhi Shop
        </h2>
        <h3 className="text-4xl font-semibold">Register Now</h3>
        <form onSubmit={handleRegister} className="md:w-1/2 w-full flex flex-col gap-2">
          <div className="flex flex-col w-full">
            <label className="font-medium">Your Name</label>
            <input className="px-4 py-2 rounded-md focus:outline-none placeholder:text-[#8a8a8a] w-full" type="text" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-medium">Your Email</label>
            <input className="px-4 py-2 rounded-md focus:outline-none placeholder:text-[#8a8a8a] w-full" type="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-medium">Password</label>
            <input className="px-4 py-2 rounded-md focus:outline-none placeholder:text-[#8a8a8a] w-full" type="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="w-full flex justify-center items-center">
            <input className="w-1/3 bg-[#4195dd] py-2 rounded-md text-white font-medium text-lg hover:cursor-pointer hover:bg-[#3ab5d6] translate duration-200" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
