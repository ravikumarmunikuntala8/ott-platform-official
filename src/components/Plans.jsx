import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PlanCard from "./PlanCard";
import { useState } from "react";
import { Link } from "react-router-dom";

function Plans({ data }) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const handlePlanClick = (index) => {
    setSelectedPlanIndex(index);
  };
  return (
    <div className="plans mt-24">
      <div className="general-info text-xl mb-48">
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
          Separate profile with pin
        </div>
        <div className="text-sm md:text-lg">
          <FontAwesomeIcon
            icon={faCheck}
            className="me-2"
            style={{ color: data.checkColor }}
          />
          All device supported
        </div>
        <div className="text-sm md:text-lg">
          <FontAwesomeIcon
            icon={faCheck}
            className="me-2"
            style={{ color: data.checkColor }}
          />
          Single Login{" "}
        </div>
      </div>

      <div className="plan-details flex flex-col lg:flex-row gap-6 items-center lg:items-end lg:me-44 mb-3.5">
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
        className="w-1/3 py-3.5 mx-auto block my-11 font-bold text-2xl tracking-widest flex justify-center items-center"
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
