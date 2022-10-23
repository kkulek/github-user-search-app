import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";

export const Card = styled.section`
  background-color: ${colorPalette.dark.dark};
  width: 100%;
  min-height: 250px;
  border-radius: 15px;
  padding: 44px 48px;
  display: flex;
  gap: 3rem;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`