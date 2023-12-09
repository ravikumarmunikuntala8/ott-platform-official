import { Link } from "react-router-dom";
import Logo from "../assets/logos/sitelogo.jpeg";

function NavBar() {
  return (
    <div className="navbar text-md lg:text-xl h-20 flex items-center justify-between">
      <div className="logo h-12 w-20 lg:h-16 lg:w-28 bg-logo rounded-fifty flex justify-center items-center font-extrabold">
        <img
          src={Logo}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="nav-links flex gap-3 lg:gap-8 items-center">
        <Link to="/">Contact Us</Link>
        <Link to="/">About Us</Link>
        <Link
          className="bg-login text-sm px-4 lg:px-8 py-2 rounded-lg shadow-login"
          style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
