import React from "react";
import styled from "styled-components";

const ContainerElement = styled.div`
  min-width: 327px;
  max-width: 730px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
  
  @media (min-width: 768px) {
    min-width: 573px;
  }

  @media (min-width: 1024px) {
    min-width: 730px;
  }
`

export function Container({children}) {
    return (
        <ContainerElement>
            {children}
        </ContainerElement>
    )
}