import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";

export const Container = styled.div`
  background-color: ${colorPalette.dark.veryDark};
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 16px;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 13px;
    color: ${colorPalette.dark.light};
  }

  p {
    font-size: 22px;
    font-weight: bold;
    color: ${colorPalette.dark.white};
  }
`