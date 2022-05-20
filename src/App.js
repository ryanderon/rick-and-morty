import "./App.css";
import styled from "styled-components";
import { color3 } from "./__variables";
import { Route, Routes } from "react-router";
import CharacterList from "./pages/CharacterList/CharacterList";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";

const Container = styled.div`
  background-color: ${color3};
  display: block;
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
