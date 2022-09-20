import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Intro from "./components/Intro";
import Letter from "./components/letterPage/Letter";
import Main from "./components/Main";
import Test from "./components/testPage/Test";
import styles from "../src/styles/App.module.css";
import styled from "styled-components";

export default function App() {
  return (
    <Container className={styles.App}>
      <Header />
      <Main />
      <Letter />
      <Test />
      <Intro />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
