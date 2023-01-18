import { Container } from "./components/Container";
import { TheHeader } from "./components/TheHeader";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard/UserCard";
import { defaultUser } from "./mock";
import {useState} from "react";
import {GitHubError, GitHubUser, LocalGitHubUser} from "./types";
import {isGitHubUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/extract-local-user";

const Base_Url = 'https://api.github.com/users/';

function App() {
    const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);
    const fetchUser = async (userName: string) => {
        const url = Base_Url + userName;
        const res = await fetch(url);
        const user = await res.json() as GitHubUser | GitHubError;
        if(isGitHubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null)
        };
    };


  return (
    <Container>
        <TheHeader />
        <Search hasError={!user} onSubmit={fetchUser} />
        {user &&(
            <UserCard
                {...user}
            />
        )}
    </Container>
  );
};

export default App;
