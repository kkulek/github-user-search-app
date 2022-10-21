import {Main} from "./components/Main";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {SearchBar} from "./components/SearchBar";
import {UserCard} from "./components/UserCard";

function App() {
    return (
        <Main>
            <Container>
                <Header/>
                <SearchBar/>
                <UserCard/>
            </Container>
        </Main>
    );
}

export default App;
