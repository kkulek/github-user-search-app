import React from "react";
import {AvatarImg} from "./Avatar.style";

export function Avatar({avatar}) {
    return (
        <AvatarImg src={avatar} alt="avatar"/>
    )
}