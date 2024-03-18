import Select from "../Select/Select";
import ScaleToggle from "../ScaleToggle/ScaleToggle";
import Temperature from "../Temperature/Temperature";
import MainIcon from "../MainIcon/MainIcon";
import SunTimer from "../SunTimer/SunTimer";
import * as S from "./styles";
import Navbar from "../Navbar/Navbar";

const InfoContainer = () => {
  return (
    <S.Container data-testid="infoContainer">
      <Navbar/>
      <S.TopContainer>
        <S.TopContainerLeft>
          <Select data-testid="selectComponent" />
        </S.TopContainerLeft>
        <S.TopContainerRight>
          <ScaleToggle data-testid="scaleToggleComponent" />
        </S.TopContainerRight>
      </S.TopContainer>

      <S.CenterContainer>
        <Temperature data-testid="temperatureComponent" />
        <MainIcon data-testid="mainIconComponent" />
      </S.CenterContainer>

      <S.BottomContainer>
        <SunTimer data-testid="sunTimerComponent" />
      </S.BottomContainer>
    </S.Container>
  );
};

export default InfoContainer;
