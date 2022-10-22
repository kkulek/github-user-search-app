import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 568px) {
    flex-direction: row;
    gap: 3rem;
  }
`

export function Links() {
    return (
        <Container>
            <ul>
                <li>San Francisco</li>
                <li>https://github.blog</li>
            </ul>
            <ul>
                <li>twitter</li>
                <li>@github</li>
            </ul>
        </Container>
    )
}