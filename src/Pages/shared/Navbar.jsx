import { Link, NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { authorizedContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = useContext(authorizedContext);
  const navigate = useNavigate()
  const signoutHandler = async () => {
    try {
      await logOut();
      navigate("/");
      toast.success("User Logout Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const navList = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="all-scholarship-page">
        <li>All Scholarship</li>
      </NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  );
  return (
    <div className="sticky top-0 bg-opacity-80 z-10">
      <div className="navbar bg-base-100 px-6 py-3">
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
              {navList}
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <img src="https://i.ibb.co.com/9n365J4/pexels-raven-domingo-66737910-11912061.jpg" alt="" className="w-[50px] h-[50px] rounded-full" />
            <h1 className="text-xl font-bold  text-[#126e82]">
              ScholarBridge
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        <div className="navbar-end hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 gap-6">{navList}</ul>
        </div>

        <div className="">
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <img
                className="w-10 h-10 ml-3 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button
                onClick={signoutHandler}
                className="btn bg-[#126e82] text-white font-bold"
              >
                Log-Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-[#126e82] text-white font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
