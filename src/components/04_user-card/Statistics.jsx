import React from "react";
import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";


const Container = styled.div`
  background-color: ${colorPalette.dark.veryDark};
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 16px;
`

const Col = styled.div`
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

export function Statistics() {
    return (
        <Container>
            <Col>
                <h2>Repos</h2>
                <p>8</p>
            </Col>
            <Col>
                <h2>Followers</h2>
                <p>3938</p>
            </Col>
            <Col>
                <h2>Following</h2>
                <p>9</p>
            </Col>
        </Container>
    )
}