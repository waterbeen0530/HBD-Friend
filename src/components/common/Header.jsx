import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Link to="main" spy={true} smooth={true}>
        <h2>MZOME</h2>
      </Link>

      <Wrapper>
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
      </Wrapper>
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

  @media (max-width: 500px) {
    h2 {
      padding-left: 15px;
      font-size: 16px;
    }
  }
`;
const Wrapper = styled.div`
  /* width: 500px; */
  padding-right: 70px;
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
  & > a > p {
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;

    transition: 0.2s;
    &:active {
      color: #bac8ff;
    }
  }

  @media (max-width: 500px) {
    /* width: 250px; */
    gap: 10px;
    padding-right: 15px;

    & > a > p {
      white-space: nowrap;
      font-size: 0.1px;
    }
  }
`;
