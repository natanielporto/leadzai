import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 500px;
  border: 1px solid red;
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
