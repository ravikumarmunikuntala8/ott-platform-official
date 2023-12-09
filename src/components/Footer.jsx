import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="bg-footer flex justify-around md:grid md:grid-cols-2 md:grid-cols-6  lg:gap-4 text-sm lg:text-md pl-8 lg:pl-24 py-16 mt-80">
      <div className="social-links flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} color="#7e7e7e" />
          <span>Email</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} color="#7e7e7e" />
          <span>Phone</span>
        </div>
      </div>
      <div className="useful-links flex flex-col gap-2">
        <div>ottplatform@gmail.com</div>
        <div>+91 9888888888</div>
      </div>
    </div>
  );
}

export default Footer;
