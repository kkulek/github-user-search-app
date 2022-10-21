import React from "react";
import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";
import search from "../../img/icon-search.svg"

const Bar = styled.nav`
  background-color: ${colorPalette.dark.dark};
  //width: 100%;
  padding: 4px;
  display: flex;
  justify-content: space-around;
  border-radius: 1rem;
  height: 70px;
  width: 573px;
  align-items: center;
`

const Icon = styled.img`

`

const Input = styled.input`
  color: ${colorPalette.dark.light};
  background-color: ${colorPalette.dark.dark};
`

const Button = styled.button`
  padding: 10px 16px;
  background-color: ${colorPalette.dark.accent};
  border: none;
  font-size: 1rem;
  color: ${colorPalette.dark.white};
  border-radius: 10px;
`

export function SearchBar() {
    return (
        <Bar>
            <Icon src={search} alt="search"></Icon>
            <Input placeholder="Search GitHub username…"></Input>
            <Button>Search</Button>
        </Bar>
    )
}