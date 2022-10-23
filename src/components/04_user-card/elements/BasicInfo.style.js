import styled from "styled-components";
import {colorPalette} from "../../../general/colorPallete";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //margin-bottom: 2rem;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    justify-content: space-between;

  }
`

export const WrapperTopSegment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Name = styled.div`
  h2 {
    font-size: 26px;
    margin-bottom: 0.7rem;
  }
`

export const Login = styled.p`{
  font-size: 1rem;
  color: ${colorPalette.dark.accent};
}
`

export const Bio = styled.p`
    margin-top: 2rem;
`

export const Date = styled.p`

`



