import Moment from "moment";
import {Container, Name, Date, Bio, Login, WrapperTopSegment} from "./BasicInfo.style";
import {Avatar} from "./Avatar";

export function BasicInfo({avatar, name, login, created, bio, windowWidth}) {
    Moment.locale("en")

    return (
        <article>
            <Container>
                {windowWidth.width > 1023
                    ? (<></>)
                    : <Avatar avatar={avatar}/>
                }
                <WrapperTopSegment>
                    <Name>
                        <h2>
                            {name}
                        </h2>
                        <Login>
                            @{login}
                        </Login>
                    </Name>
                    <Date>
                        Joined {Moment(created).format("DD MM YYYY")}
                    </Date>
                </WrapperTopSegment>
            </Container>
            <Bio>
                {bio}
            </Bio>
        </article>
    )
}