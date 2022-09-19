import styled from "styled-components";
import Header from "./components/common/Header";
import Intro from "./components/Intro";
import Letter from "./components/letterPage/Letter";
import Main from "./components/Main";
import Test from "./components/testPage/Test";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Letter />
      <Test />
      <Intro />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;
