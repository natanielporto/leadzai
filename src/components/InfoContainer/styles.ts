import styled from "styled-components";

export const OuterContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 17.5em;
background-color: #607d8bff;
padding-inline: 2em;

`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 18.75em;
  height: 28em;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TopContainerLeft = styled.div`
  margin-top: 1em;
`;

export const TopContainerRight = styled.div`
  margin-top: 2em;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;
