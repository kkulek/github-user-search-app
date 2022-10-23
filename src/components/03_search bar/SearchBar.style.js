import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";

export const Bar = styled.nav`
  background-color: ${colorPalette.dark.dark};
  padding: 4px 10px 4px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  max-height: 70px;
  align-items: center;
  gap: 1.2rem;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-grow: 1;
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`

export const Input = styled.input`
  all: unset;
  color: ${colorPalette.dark.light};
  background-color: ${colorPalette.dark.dark};
  width: 100%;

  &:focus {
    border-bottom: 1px solid ${colorPalette.dark.accent};
  }
`

export const Button = styled.button`
  padding: 0.8rem 1.2rem;
  margin: 0.5rem 0;
  background-color: ${colorPalette.dark.accent};
  border: none;
  font-size: 1rem;
  color: ${colorPalette.dark.white};
  border-radius: 10px;
  transition: background-color 200ms;
  
  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
  
  &:hover {
    background-color: ${colorPalette.dark.accentLight};
  }
`