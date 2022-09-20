import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Link } from "react-scroll";

export default function Letter() {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal((pre) => !pre);
  };
  return (
    <Container id="letter">
      <Wrapper>
        <h1>
          엇, 편지가 왔어요! <br />
          한번 확인해 볼까요?
        </h1>
        <Link to="letter" spy={true} smooth={true}>
          <button onClick={onClick}>확인하기</button>
        </Link>
      </Wrapper>
      <img src="/img/letter/loveLetter.svg" alt="" />
      <Modal view={modal} letter={onClick} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  color: #343a40;
  img {
    position: absolute;
    bottom: 0;
    right: 20px;
    width: 40%;
  }
  @media (max-width: 500px) {
    img {
      margin: 0 -10px 100px 0;
      width: 70%;
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 100px;

  h1 {
    margin: 0;
    font-size: 65px;
    font-weight: 900;
  }

  button {
    width: 160px;
    height: 42px;
    margin-top: 20px;
    border-radius: 30px;
    border: #e03131 1px solid;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background: #fa5252;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      background: #495057;
      border: #adb5bd 1px solid;
    }
  }

  @media (max-width: 500px) {
    /* top:0; */
    left: 0;
    margin: 90px 0 0 30px;
    h1 {
      font-size: 30px;
    }
  }
`;
