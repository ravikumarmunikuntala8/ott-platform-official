import Netflix from "../assets/logos/netflix.png";
import Prime from "../assets/logos/prime.png";
import Hotstar from "../assets/logos/hotstar.png";
import Sony from "../assets/logos/sony.png";
import Zee5 from "../assets/logos/zee5.png";
import Aha from "../assets/logos/aha.png";
import Other from "../assets/logos/other.png";
import { Link } from "react-router-dom";

function NavGallery() {
  return (
    <div className="nav-gallery w-full flex justify-between gap-1 my-1.5 lg:my-3.5">
      <div>
        <Link to="/platform?p=netflix">
          <img src={Netflix} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/platform?p=prime">
          <img src={Prime} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/platform?p=hotstar">
          <img src={Hotstar} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/platform?p=sony">
          <img src={Sony} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/platform?p=zee5">
          <img src={Zee5} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/platform?p=aha">
          <img src={Aha} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={Other} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default NavGallery;
