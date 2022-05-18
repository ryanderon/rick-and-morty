import "./App.css";
import styled from "styled-components";
import { color1 } from "./__variables";
import { Route, Routes } from "react-router";
import CharacterList from "./pages/CharacterList/CharacterList";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";

const Container = styled.div`
  background-color: ${color1};
  display: block;
  padding: 16px;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route strict exact path="/" element={<CharacterList />} />
        <Route strict exact path="/:id" element={<CharacterDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
