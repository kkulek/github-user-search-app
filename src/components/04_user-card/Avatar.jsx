import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png"


const AvatarImg = styled.img`
  border-radius: 50%;
  max-height: 117px;
  max-width: 117px;

`

export function Avatar() {
    return (
        <AvatarImg src={avatar} alt="avatar"/>
    )
}