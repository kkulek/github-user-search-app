import {Statistics} from "./Statistics";
import {Links} from "./Links";
import {BasicInfo} from "./BasicInfo";
import {Avatar} from "./Avatar";
import {Card, Div} from "./UserCard.style";

export function UserCard({user, isLoaded}) {
    const {
        avatar_url,
        name,
        login,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        blog,
        twitter_username,
        company
    }
        = user

    return (
        <>
            {isLoaded && user !== null ? (
                <Card>
                    <Avatar avatar={avatar_url}/>
                    <Div>
                        <BasicInfo
                            name={name}
                            login={login}
                            created={created_at}
                            bio={bio}
                        />
                        <Statistics
                            repos={public_repos}
                            followers={followers}
                            following={following}
                        />
                        <Links
                            location={location}
                            blog={blog}
                            twitter={twitter_username}
                            company={company}
                        />
                    </Div>
                </Card>
            ) : (<></>)}
        </>
    )
}