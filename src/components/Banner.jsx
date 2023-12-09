import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="h-16  flex items-center ps-2 md:ps-4 lg:ps-9"
      style={{ background: "linear-gradient(to right, #9BD5FF, #0094FF)" }}
    >
      <Link to="/">
        <FontAwesomeIcon
          icon={faHouse}
          className="w-6 h-6 lg:w-8 lg:h-8 me-2 pe-2"
        />
      </Link>
      <div className="flex grow justify-center text-xxs lg:text-xl font-medium">
        <span>
          One month free trial for every service | You can use our free services
          every 24 hours. Try now!
        </span>
      </div>
    </div>
  );
}

export default Banner;
