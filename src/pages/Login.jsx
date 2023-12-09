import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="px-2 md:px-4 lg:px-8 pb-6 font-poppins mb-80">
      <NavBar />
      <Banner />
      <div className="login-content mt-16">
        <h2 className="text-3xl font-bold text-center">
          This require you to login using one of the below methods.
        </h2>
        <div
          className="flex flex-col items-center gap-6 mt-14 text-sm md:text-lg font-bold"
          style={{ color: "white" }}
        >
          <Link
            className="px-8 py-3 bg-loginBtn w-2/3 lg:w-1/3"
            style={{ borderRadius: "0.5rem" }}
            to="/facebookLogin"
          >
            <FontAwesomeIcon icon={faFacebook} className="me-2 w-8" />
            Continue with facebook
          </Link>
          <Link
            className="px-8 py-3 bg-loginBtn w-2/3 lg:w-1/3"
            style={{ borderRadius: "0.5rem" }}
            to="/twitterLogin"
          >
            <FontAwesomeIcon icon={faTwitter} className="me-2 w-8" />
            Continue with twitter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
