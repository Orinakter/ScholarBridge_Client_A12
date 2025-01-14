import { Link, NavLink } from 'react-router';
import logo from '../../../assets/images/logo.png'
const Navbar = () => {
  const navList = <>
  <NavLink to="/"> <li>Home</li></NavLink>
  <NavLink> <li>All Scholarship</li></NavLink>
  <NavLink><li>User Dashboard</li></NavLink>
  <NavLink><li>Admin Dashboard</li></NavLink>
  
  </>
    return (
        <div className='sticky top-0 bg-opacity-80 z-10'>
            <div className="navbar bg-base-100 px-6 py-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
        navList
       }
       
        
        
        
      </ul>
    </div>
    <div className="flex items-center gap-2">
        <img src={logo} alt="" className='w-[60px] h-[60px] rounded-full' />
        <h1 class="text-2xl font-bold  text-[#126e82]">
  ScholarBridge
</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex items-center">
  <ul className="menu menu-horizontal px-1 gap-6">
  {
    navList
  }

    </ul>
   
  </div>
  <div className="flex items-center gap-4">
 <Link to="/login"> <button className='btn bg-[#126e82] text-white'>Login</button></Link>

  </div>
</div>
        </div>
    );
};

export default Navbar;