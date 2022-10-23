import {Statistics} from "./elements/Statistics";
import {Links} from "./elements/Links";
import {BasicInfo} from "./elements/BasicInfo";
import {Avatar} from "./elements/Avatar";
import {Card, Div} from "./UserCard.style";
import {useEffect, useState} from "react";

export function UserCard({user, isLoaded}) {
    const [windowWidth, setWindowWidth] = useState({
        width: window.innerWidth
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth({
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
                    {windowWidth.width < 1024
                        ? (<></>)
                        : <Avatar avatar={avatar_url}/>
                    }

                    <Div>
                        <BasicInfo
                            name={name}
                            login={login}
                            created={created_at}
                            bio={bio}
                            windowWidth={windowWidth}
                            avatar={avatar_url}
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