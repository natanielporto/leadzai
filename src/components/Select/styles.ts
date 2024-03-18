import styled from "styled-components";

export const Section = styled.div`
  font-family: sans-serif;
  background: #fafafa;
  position: relative;
`;

export const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
  position: relative;
`;

export const DropDownHeader = styled.div`
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  height: 35px;
  color: gray;
  background: #fafafa;
  cursor: pointer;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  display: flex;
  align-items: center;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: #fafafa;
  box-sizing: border-box;
  color: gray;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  width: 8.1em;

  &:first-child {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  &:last-child {
    padding-bottom: 0.5em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
  cursor: pointer;
  padding-left: 1em;
`;

export const ListItemContainer = styled.div`
  &:hover {
    background: #e6e6e6;
  }
`;
