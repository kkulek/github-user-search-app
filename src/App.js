import {Main} from "./components/01_general/Main";
import {Container} from "./components/01_general/Container";
import {Header} from "./components/02_header/Header";
import {SearchBar} from "./components/03_search bar/SearchBar";
import {UserCard} from "./components/04_user-card/UserCard";
import {useState} from "react";

function App() {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('enter')
        }
    }

    return (
        <Main>
            <Container>
                <Header/>
                <SearchBar
                    onChange={handleChange}
                    onKeyUp={handleEnter}
                    value={input}/>
                <UserCard/>
            </Container>
        </Main>
    );
}

export default App;
