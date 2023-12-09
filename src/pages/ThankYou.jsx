import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="thankyou-page flex w-full h-screen items-center mt-32 flex-col">
      <h2 className="font-bold text-center mb-8">
        Than you for joining with us! <br />
        We will send you the details within the <br />
        next 24 Hours.
        <br />
        We appreciate your choice of plan.
      </h2>
      <button
        style={{
          backgroundColor: "#6071fe",
          color: "white",
          borderRadius: "0.5rem",
        }}
        className="py-1 px-8 font-semibold"
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
}

export default ThankYou;

