import Moment from "moment";
import {Wrapper, Name, Date, Bio} from "./BasicInfo.style";

export function BasicInfo({name, login, created, bio}) {
    Moment.locale("en")

    return (
        <article>
            <Wrapper>
                <Name>
                    <h1>{name}</h1>
                    <p>@{login}</p>
                </Name>
                <Date>
                    Joined {Moment(created).format("DD MM YYYY")}
                </Date>
            </Wrapper>
            <Bio>{bio}
            </Bio>
        </article>
    )
}