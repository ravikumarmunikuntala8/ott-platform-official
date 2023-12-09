import { useEffect, useState } from "react";

function PlanCard({
  duration,
  cost,
  data,
  index,
  selectedPlanIndex,
  handlePlanClick,
}) {
  const [theme, setTheme] = useState({
    bgColor: index === selectedPlanIndex ? data.bgDark : data.bgLight,
    textColor: index === selectedPlanIndex ? data.textDark : data.textLight,
  });

  const handleMouseEnter = () => {
    setTheme({ bgColor: data.bgDark, textColor: data.textDark });
  };

  const handleMouseLeave = () => {
    setTheme({
      bgColor: index === selectedPlanIndex ? data.bgDark : data.bgLight,
      textColor: index === selectedPlanIndex ? data.textDark : data.textLight,
    });
  };

  useEffect(() => {
    setTheme({
      bgColor: index === selectedPlanIndex ? data.bgDark : data.bgLight,
      textColor: index === selectedPlanIndex ? data.textDark : data.textLight,
    });
  }, [selectedPlanIndex, data]);

  return (
    <div className="plan-card flex flex-col items-center">
      <div
        className="w-52 h-48 flex justify-center items-center mb-2 lg:mb-11 cursor-pointer"
        style={{
          borderRadius: "16px",
          backgroundColor: theme.bgColor,
          color: theme.textColor,
        }}
        onClick={() => handlePlanClick(index)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duration}
      </div>
      {cost}
    </div>
  );
}

export default PlanCard;
