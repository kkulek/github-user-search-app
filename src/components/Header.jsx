import React from "react";
import styled from "styled-components";
import {ThemeSwitch} from "./ThemeSwitch";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  cursor: pointer;
  font-size: 26px;
  
  a {
    text-decoration: none;
    color: white;
  }
`

export function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <a href="https://google.com"
                   target="_blank"
                   rel="noreferrer"
                >
                    devfinder
                </a>
            </Logo>
            <ThemeSwitch/>
        </HeaderContainer>
    )
}