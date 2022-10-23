import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 568px) {
    flex-direction: row;
    gap: 3rem;
  }
`