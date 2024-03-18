import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

const SunTimer = () => {
  const { city, data } = useContext(GlobalContext);

  const greenwichCompensation = {
    "Lisbon": 0,
    "New York": 4 * 60 * 60 * 1000,
    "London": 0
  }

  const hoursInTimeZone = (miliseconds: number) => {
    const date = new Date(miliseconds * 1000 - greenwichCompensation[city]);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = String(hour).padStart(2, '0'); 
    const formattedMinutes = String(minutes).padStart(2, '0'); 
    return `${formattedHours}:${formattedMinutes}`; 
  }

  return (
    <S.Container>
      <span>
        Sunrise: {hoursInTimeZone(data?.sys?.sunrise)}
      </span>
      <span>
        Sunset: {hoursInTimeZone(data?.sys?.sunset)}
      </span>
     </S.Container>
  );
};

export default SunTimer;
