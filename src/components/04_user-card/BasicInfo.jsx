import React from "react";
import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";

const Name = styled.div`
  h1 {
    font-size: 26px;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colorPalette.dark.accent};
  }
`

const Bio = styled.p`
`

const Date = styled.p`

`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`


export function BasicInfo() {
    return (
        <div>
            <Wrapper>
                <Name>
                    <h1>The Octocat</h1>
                    <p>@octocat</p>
                </Name>
                <Date>
                    Joined 25 Jan 2011
                </Date>
            </Wrapper>
            <Bio>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
                eros.
            </Bio>
        </div>

    )
}