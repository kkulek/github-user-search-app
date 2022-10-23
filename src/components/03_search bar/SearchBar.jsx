import React from "react";
import search from "../../img/icon-search.svg";
import {Bar, Search, Icon, Input, Button} from "./SearchBar.style";

export function SearchBar({onChange, onKeyUp, value, onClick}) {
    return (
        <Bar>
            <Search>
                <label htmlFor="search">
                    <Icon src={search} alt="search"></Icon>
                </label>
                <Input placeholder="Search GitHub username…"
                       id="search"
                       onChange={onChange}
                       onKeyUp={onKeyUp}
                       value={value}
                ></Input>
            </Search>
            <Button
                onClick={onClick}
            >
                Search
            </Button>
        </Bar>
    )
}