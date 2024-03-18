import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const MainIcon = () => {
  const { data } = useContext(GlobalContext);

  if (data && data.weather && data.weather.length > 0 && data.weather[0].icon) {
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    return <img src={iconUrl} alt="Weather Icon" />;
  }

  return <div />;
};

export default MainIcon;
