import {Main} from "./components/01_general/Main";
import {Container} from "./components/01_general/Container";
import {Header} from "./components/02_header/Header";
import {SearchBar} from "./components/03_search bar/SearchBar";
import {UserCard} from "./components/04_user-card/UserCard";

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
