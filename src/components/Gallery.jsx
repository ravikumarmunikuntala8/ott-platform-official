import Netflix from "../assets/images/netflix.png";
import Prime from "../assets/images/prime.png";
import Hotstar from "../assets/images/hotstar.png";
import Sony from "../assets/images/sony.png";
import Zee5 from "../assets/images/zee5.png";
import Aha from "../assets/images/aha.png";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12 ">
      <div className="social-platform h-full w-full">
        <Link
          to={{
            pathname: "/platform",
            search: "?p=netflix",
          }}
        >
          <img src={Netflix} alt="" className="h-full w-full" />
        </Link>
      </div>
      <div className="social-platform h-full w-full">
        <Link to="/platform?p=prime">
          <img src={Prime} alt="" className="h-full w-full" />
        </Link>
      </div>
      <div className="social-platform h-full w-full">
        <Link to="/platform?p=hotstar">
          <img src={Hotstar} alt="" className="h-full w-full" />
        </Link>
      </div>
      <div className="social-platform h-full w-full">
        <Link to="/platform?p=sony">
          <img src={Sony} alt="" className="h-full w-full" />
        </Link>
      </div>
      <div className="social-platform h-full w-full">
        <Link to="/platform?p=zee5">
          <img src={Zee5} alt="" className="h-full w-full" />
        </Link>
      </div>
      <div className="social-platform h-full w-full">
        <Link to="/platform?p=aha">
          <img src={Aha} alt="" className="h-full w-full" />
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
