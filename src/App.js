import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <MainContent style = {{ width: '100vw' }}>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good Morning, Isaac</Greeting>
            {[<h2>Cooking</h2>, <h2>Reading</h2>]}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`;
const Main = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`;

const TodoContent = styled.div``;

const Title = styled.div``;

const Greeting = styled.div``;
