import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Link to="main" spy={true} smooth={true}>
        <h2>MZOME</h2>
      </Link>

      <div>
        <Link to="letter" spy={true} smooth={true}>
          <p>두근두근편지</p>
        </Link>
        <Link to="test" spy={true} smooth={true}>
          <p>심리테스트</p>
        </Link>
        <Link to="life" spy={true} smooth={true}>
          <p>이미정 일대기</p>
        </Link>
        <Link to="footer" spy={true} smooth={true}>
          <p>DEVELOPER</p>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #343a40;
  z-index: 20;
  h2 {
    padding-left: 70px;
    font-size: 30px;
    cursor: pointer;
  }
  div {
    width: 500px;
    padding-right: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
