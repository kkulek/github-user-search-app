import React from "react";
import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";
import search from "../../img/icon-search.svg"

const Bar = styled.nav`
  background-color: ${colorPalette.dark.dark};
  padding: 4px 10px 4px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  max-height: 70px;
  align-items: center;
`


const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

const Icon = styled.img`

`

const Input = styled.input`
  all: unset;
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
            <Search>
                <Icon src={search} alt="search"></Icon>
                <Input placeholder="Search GitHub username…"></Input>
            </Search>
            <Button>Search</Button>
        </Bar>
    )
}