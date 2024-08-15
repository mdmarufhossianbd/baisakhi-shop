import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../assets/baishakhi shop.png";
import { AuthContext } from "../../provider/authProvider";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then(()=>{
        toast.success("Your account logout successfully")
    })
    .catch(err => {
        toast.error(err.message)
    })
  }
  return (
    <div className="sticky top-0 bg-white">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* add logo here */}
          <Link to={"/"}>
            <img
              className="w-44 h-[80px] object-cover"
              src={logo}
              alt="Baishakhi Shop"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {/* user details add here */}
          {!user ? <Link to={'/login'} className="px-5 py-2 rounded-md bg-[#ef8121] text-white font-semibold hover:bg-[#fd9f4d] translate-x-0 duration-300">Login</Link> : <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={user.displayName}
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>}          
        </div>
      </div>
    </div>
  );
};

export default Navber;
