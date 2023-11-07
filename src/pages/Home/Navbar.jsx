import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../routes/AuthProvider";
import { FaGamepad } from 'react-icons/fa';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('Logged Out Successfully'))
      .catch(error => console.error(error))
  }

  const navLink = <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/shop">Shop</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    {user &&
      <>
        <li><NavLink to="/features">Features</NavLink></li>
        <li><NavLink to="/hackathon">Hackathon</NavLink></li>
      </>
    }


    {/* <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li> */}

  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <Link to="/"><button className="btn btn-sm btn-ghost uppercase text-xl font-cormorant font-semibold"><FaGamepad></FaGamepad> PHero-Arena</button></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end items-center justify-end" >
        {
          user ? <>
            <span className="mr-3 border p-3 border-black rounded-es-full rounded-se-full hover:bg-slate-700 hover:text-yellow-200 ">{user.displayName}</span>
            <button onClick={handleLogOut} className="btn btn-group btn-ghost text-black border border-slate-950 rounded-se-full rounded-es-full  hover:bg-slate-800 hover:text-white">Logout</button>

          </>
            :
            <Link to="/login"> <button className="btn btn-group btn-ghost text-black border border-slate-950 rounded-se-full rounded-es-full  hover:bg-slate-800 hover:text-white">Login</button></Link>

        }
        {/* <Link to="/login"> <a className="btn btn-group btn-ghost text-black border border-slate-950 rounded-se-full rounded-es-full  hover:bg-slate-800 hover:text-white">Login</a></Link> */}

      </div>
    </div>
  );
};

export default Navbar;