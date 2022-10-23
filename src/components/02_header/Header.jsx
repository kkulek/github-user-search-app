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
  font-size: 22px;
  
  a {
    text-decoration: none;
    color: white;
  }
  
  @media (min-width: 768px) {
    font-size: 26px;
  }
`

export function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <a href="/"
                   rel="noreferrer"
                >
                    <h1>
                        devfinder
                    </h1>
                </a>
            </Logo>
            <ThemeSwitch/>
        </HeaderContainer>
    )
}