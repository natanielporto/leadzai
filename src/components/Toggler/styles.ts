import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 25px;
  background: #576972ff;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
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
