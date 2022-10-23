import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";

export const Name = styled.div`
  h1 {
    font-size: 26px;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colorPalette.dark.accent};
  }
`

export const Bio = styled.p`
`

export const Date = styled.p`

`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`