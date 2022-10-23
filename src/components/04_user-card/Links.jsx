import React from "react";
import {Container} from "./Links.style";

export function Links({location, blog, twitter, company}) {
    return (
        <Container>
            <ul>
                <li>{location !== null ? location : " "}</li>
                <li>{blog !== null ? blog : " "}</li>
            </ul>
            <ul>
                <li>{twitter !== null ? twitter : " "}</li>
                <li>{company !== null ? company : " "}</li>
            </ul>
        </Container>
    )
}