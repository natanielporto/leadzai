import Toggler from "../Toggler/Toggler";
import * as S from "./styles";

const ScaleToggle = () => {
  return (
    <S.Container>
      <div>°C</div>
      <Toggler />
      <div>°F</div>
    </S.Container>
  );
};

export default ScaleToggle;
