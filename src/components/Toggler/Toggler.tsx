import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

const Toggler = () => {
  const { scale, setScale } = useContext(GlobalContext);

  const handleSelectScale = () => {
    const newScale = scale === "Celsius" ? "Fahrenheit" : "Celsius";
    setScale(newScale);
  };

  return (
    <S.Label>
      <S.Input type="checkbox" onClick={handleSelectScale} />
      <S.Switch />
    </S.Label>
  );
};

export default Toggler;
