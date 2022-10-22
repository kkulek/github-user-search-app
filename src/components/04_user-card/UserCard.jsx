import React from "react";
import styled from "styled-components";
import {colorPalette} from "../../general/colorPallete";
import {Statistics} from "./Statistics";
import {Links} from "./Links";
import {BasicInfo} from "./BasicInfo";
import {Avatar} from "./Avatar";



const Card = styled.section`
  background-color: ${colorPalette.dark.dark};
  width: 100%;
  min-height: 250px;
  border-radius: 15px;
  padding: 44px 48px;
  display: flex;
  gap: 3rem;
`

const Div = styled.div`
    display: flex;
  flex-direction: column;
  gap: 2rem;
`


export function UserCard() {
    return (
        <Card>
            <Avatar/>
            <Div>
                <BasicInfo />
                <Statistics/>
                <Links />
            </Div>
        </Card>
    )
}