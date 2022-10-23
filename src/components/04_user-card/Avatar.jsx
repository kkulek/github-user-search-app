import React from "react";
import {AvatarImg} from "./Avatar.style";

export function Avatar({user, isLoaded}) {
    return (
        <>
            {isLoaded && user !== null ? (
                <AvatarImg src={user.avatar_url} alt="avatar"/>
            ) : ( <></> )}
        </>
    )
}