import { useContext } from "react";
import * as S from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

const Temperature = () => {
  const { data, scale } = useContext(GlobalContext);

  const finalTemperature = () => {
    if(scale === 'Celsius') {
      return Math.ceil(data?.main?.temp - 273.15)
    }
    if(scale === 'Fahrenheit') {
      return Math.ceil((data?.main?.temp - 273.15) * 9/5 + 32)
    }
  }

  return (
    <S.Container>
      <S.Temperature>{finalTemperature()} °{scale === "Celsius" ? "C" : "F"}</S.Temperature>
    </S.Container>
  );
};

export default Temperature;
