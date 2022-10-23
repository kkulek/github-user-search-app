import React from "react";
import search from "../../img/icon-search.svg"
import {Bar, Search, Icon, Input, Button} from "./SearchBar.style";

export function SearchBar({onChange, onKeyUp, value}) {
    return (
        <Bar>
            <Search>
                <Icon src={search} alt="search"></Icon>
                <Input placeholder="Search GitHub username…"
                       onChange={onChange}
                       onKeyUp={onKeyUp}
                       value={value}
                ></Input>
            </Search>
            <Button>Search</Button>
        </Bar>
    )
}