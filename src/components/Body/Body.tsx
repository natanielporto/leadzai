import InfoContainer from "../InfoContainer/InfoContainer";
import * as S from "./styles";

const Body = () => {
  return (
    <S.Container data-testid="bodyContainer" >
      <InfoContainer/>
    </S.Container>
  );
};

export default Body;
