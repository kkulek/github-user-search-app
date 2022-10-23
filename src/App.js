import {Main} from "./components/01_general/Main";
import {Container} from "./components/01_general/Container";
import {Header} from "./components/02_header/Header";
import {SearchBar} from "./components/03_search bar/SearchBar";
import {UserCard} from "./components/04_user-card/UserCard";
import {useEffect, useState} from "react";

function App() {

    const DEFAULT_USER = {
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        name: "The Octocat",
        login: "octocat",
        created_at: "2011-01-25T18:44:36Z",
        public_repos: "8",
        followers: "7362",
        following: "8",
        location: "San Francisco",
        blog: "https://github.blog",
        twitter_username: "null",
        company: "@github"
    }

    const [input, setInput] = useState("");
    const [error, setError] = useState(null);
    const [user, setUser] = useState(DEFAULT_USER);
    const [isLoaded, setIsLoaded] = useState();

    // useEffect(() => {
    //     getUserFromAPI("octocat");
    //
    // }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            getUserFromAPI(input)
        }
    }

    const searchUser = () => {
        getUserFromAPI(input)
    }

    const getUserFromAPI = (username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((result) => {
                    if (result.message !== undefined) {
                        setIsLoaded(true);
                        setError(result)
                    } else {
                        setIsLoaded(true);
                        setUser(result);
                        setError(null);
                    }
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    return (
        <Main>
            <Container>
                <Header/>
                <SearchBar
                    onChange={handleChange}
                    onKeyUp={handleEnter}
                    value={input}
                    onClick={searchUser}/>
                <UserCard
                    user={user}
                    isLoaded={isLoaded}
                />
            </Container>
        </Main>
    );
}

export default App;
