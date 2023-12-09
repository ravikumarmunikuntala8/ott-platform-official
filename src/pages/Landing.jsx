import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="px-2 md:px-4 lg:px-8 pb-6 font-poppins">
      <NavBar />
      <Banner />
      <Search />
      <Gallery />
      <div className="">
        <h2 className="text-lg lg:text-2xl font-semibold mb-2 mt-14">
          OTT Subscription Coming Soon!
        </h2>
        <p className="text-sm lg:text-lg mb-8">
          <FontAwesomeIcon icon={faRightLong} className="me-2" />
          Sun nxt, Altt balaji, Ullu, Tinder, Voot, Spotify, YouTube Premium,
          Jiocinema, Canva pro, Google drive, Apple music.
        </p>
      </div>
      <div className="mb-80">
        <h2
          className="text-md lg:text-xl font-extrabold mb-2"
          style={{ color: "#6c4e4e" }}
        >
          Our Services:-
        </h2>
        <ul className="flex flex-col gap-1 text-sm lg:text-md">
          <li>
            <FontAwesomeIcon icon={faCircle} className="me-2 w-2.5" />
            10,500+ subscriptions delivered.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className="me-2 w-2.5" />
            Providing services since 2021.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className="me-2 w-2.5" />
            Quality services are not just delivered; they are crafted with
            genuine care, dedications, and a passion for excellence.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
