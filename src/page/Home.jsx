import styled from "styled-components";
import styles from "../styles/App.module.css";
import Header from "../components/common/Header";
import Main from "../components/Main";
import Letter from "../components/letterPage/Letter";
import Test from "../components/testPage/Test";
import Intro from "../components/Intro";
import Footer from "../components/common/Footer";

export default function Home() {
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
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;
