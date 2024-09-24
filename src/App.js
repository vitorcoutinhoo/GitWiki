import { Container, Header, Content } from "./styles.js";
import Input from "./components/Input/index.js";
import Button from "./components/Button/index.js";
import github from './assets/github.png';
import ItemRepo from "./components/Repo/index.js";
import { api } from "./services/Api.js";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState('');
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async () => {
    try {
      const token = "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"
      const {data} = await api.get(`repos/${search}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      if (data.id)
        setRepositories([...repositories, data]);
    }
    catch (error) {
      alert('Repository not found');
    }
  }

  const handleDelete = (fullname) => {
    const newRepositories = repositories.filter((repo) => repo.full_name !== fullname);
    setRepositories(newRepositories);
  }
  
  return (
    <div className="App">
      <Container>
        <Header>
          <img src={github} alt="github"/>
        </Header>
        <Content>
          <h1>Git Wiki</h1>
          <p>Git Wiki is a simple wiki that uses GitHub as a backend. <br />It allows you to save github repositories.</p>
        </Content>
        <hr />
        <Content className="main">
            <Input placeholder="Search Repository" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <Button label="Search" className="search" onClick={handleSearch}/>
            <Content className="list">
              <h1>Repositories</h1>
              {repositories.map((repo) => (
                <ItemRepo nome={repo.name} fullname={repo.full_name} url={repo.html_url} onClick={() => handleDelete(repo.full_name)}/>
              ))}
            </Content>
        </Content>
      </Container>
    </div>
  );
}

export default App;
