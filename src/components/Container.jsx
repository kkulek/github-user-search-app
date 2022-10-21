import React from "react";
import styled from "styled-components";

const ContainerElement = styled.div`
  min-width: 327px;
  max-width: 730px;
`

export function Container({children}) {
    return (
        <ContainerElement>
            {children}
        </ContainerElement>
    )
}