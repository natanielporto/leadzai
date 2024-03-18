import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1em;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 1.5em;
  background: #576972ff;
  border-radius: 2em;
  padding: 0.25em;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 1.25em;
    height: 1.25em;
    border-radius: 50%;
    top: 50%;
    left: 0.25em;
    background: #ec6e4cff;
    transform: translate(-10px, -50%);
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    &:before {
      transform: translate(15px, -50%);
    }
  }
`;
