import React from "react";
import {Container, Col} from "./Statistics.style";


export function Statistics({repos, following, followers}) {
    return (
        <Container>
            <Col>
                <h2>Repos</h2>
                <p>{repos !== null ? repos : "0"}</p>
            </Col>
            <Col>
                <h2>Followers</h2>
                <p>{followers !== null ? followers : "0" }</p>
            </Col>
            <Col>
                <h2>Following</h2>
                <p>{following !== null ? following : "0" }</p>
            </Col>
        </Container>
    )
}