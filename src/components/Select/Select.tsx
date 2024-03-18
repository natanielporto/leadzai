import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

const CITIES = ["London", "New York", "Lisbon"];

export default function App() {
  const { city, setCity } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: "Lisbon" | "New York" | "London") => () => {
    setIsOpen(false);
    setCity(value);
  };

  return (
    <S.Section>
      <S.DropDownContainer>
        <S.DropDownHeader onClick={toggling} data-testid="dropDownHeader">
          {city || "Lisbon"}
        </S.DropDownHeader>
        {isOpen && (
          <S.DropDownListContainer>
            <S.DropDownList>
              {CITIES.map((option) => (
                <S.ListItemContainer key={option}>
                  <S.ListItem
                    onClick={onOptionClicked(
                      option as "Lisbon" | "New York" | "London"
                    )}
                  >
                    {option}
                  </S.ListItem>
                </S.ListItemContainer>
              ))}
            </S.DropDownList>
          </S.DropDownListContainer>
        )}
      </S.DropDownContainer>
    </S.Section>
  );
}
