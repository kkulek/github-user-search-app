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
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const Icon = styled.img`

`

export const Input = styled.input`
  all: unset;
  color: ${colorPalette.dark.light};
  background-color: ${colorPalette.dark.dark};
`

export const Button = styled.button`
  padding: 10px 16px;
  background-color: ${colorPalette.dark.accent};
  border: none;
  font-size: 1rem;
  color: ${colorPalette.dark.white};
  border-radius: 10px;
`