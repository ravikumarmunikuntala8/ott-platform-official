import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PlanCard from "./PlanCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Plans({ data, platform }) {
  const navigate = useNavigate();
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const handlePlanClick = (index) => {
    setSelectedPlanIndex(index);
    navigate("/login");
  };
  return (
    <div className="plans mt-12">
      <div className="general-info text-xl mb-20 lg:mb-48">
        <h2 className="lg:text-3xl font-semibold mb-2">
          Choose the plan that's right for you
        </h2>
        <div className="text-sm md:text-lg">
          <FontAwesomeIcon
            icon={faCheck}
            className="me-2"
            style={{ color: data.checkColor }}
          />
          Premium plan(4K UHD)
        </div>
        <div className="text-sm md:text-lg">
          <FontAwesomeIcon
            icon={faCheck}
            className="me-2"
            style={{ color: data.checkColor }}
          />
          {platform === "netflix"
            ? "Separate profile with pin"
            : "On your own number"}
        </div>
        <div className="text-sm md:text-lg">
          <FontAwesomeIcon
            icon={faCheck}
            className="me-2"
            style={{ color: data.checkColor }}
          />
          {platform === "netflix"
            ? "All device supported"
            : "All devices supported"}
        </div>
        <div className="text-sm md:text-lg">
          <FontAwesomeIcon
            icon={faCheck}
            className="me-2"
            style={{ color: data.checkColor }}
          />
          {platform === "netflix" ? "Single Login" : "Ad-free Streaming"}
        </div>
      </div>

      <div className="plan-details flex flex-row gap-1 md:gap-6 items-center lg:items-end lg:me-44 mb-3.5 overflow-x-scroll text-xxs">
        <div className="grow">Monthly Plan</div>
        {data.plans.map((plan, index) => {
          return (
            <PlanCard
              key={index}
              index={index}
              duration={plan.duration}
              cost={plan.cost}
              data={data}
              selectedPlanIndex={selectedPlanIndex}
              handlePlanClick={handlePlanClick}
            />
          );
        })}
      </div>
      <hr className="lg:me-44" />
      <Link
        className="w-1/3 py-2.5 md:py-3.5 mx-auto block my-11 font-bold text-2xl tracking-widest flex justify-center items-center"
        style={{
          backgroundColor: data.buttonBg,
          color: "white",
          borderRadius: "0.5rem",
        }}
        to="/login"
      >
        Next
      </Link>
    </div>
  );
}

export default Plans;
