import React from "react";
import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";

const MainContainer = styled.main`
  background-color: ${colorPalette.dark.veryDark};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export function Main({children}) {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}