import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import platformData from "../assets/data/platformData.json";
import Plans from "./Plans";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function PlatformContent() {
  let query = useQuery();

  const platform = query.get("p");
  return (
    <div className="platform-content flex flex-col mt-20 mb-80">
      <div className="poster w-full md:w-8/12 h-52 md:h-72 lg:h-96 self-center">
        <img
          src={require(`../assets/images/${platform}.png`)}
          alt=""
          className="w-full h-full"
        />
      </div>

      <Plans data={platformData[platform]} />
    </div>
  );
}

export default PlatformContent;
