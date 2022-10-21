import React from "react";
import styled from "styled-components";
import sun from "../../img/icon-sun.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const ThemeTitle = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 13px;
`


export function ThemeSwitch(){
    return (
    <Container>
        <ThemeTitle>Light</ThemeTitle>
        <img src={sun} alt="switch"/>
    </Container>

    )
}