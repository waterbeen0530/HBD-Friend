import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export default function Letter() {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal((pre) => !pre);
  };
  return (
    <Container>
      <Wrapper>
        <h1>
          엇, 편지가 왔어요! <br />
          한번 확인해 볼까요?
        </h1>
        <button onClick={onClick}>확인하기</button>
      </Wrapper>
      <img src="/img/letter/loveLetter.svg" alt="" />
      <Modal view={modal} letter={onClick} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  img {
    position: absolute;
    bottom: 0;
    right: 20px;
    width: 40%;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 100px;
  width: 100%;
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
  }
  button:hover {
    background: #495057;
    border: #adb5bd 1px solid;
  }
`;
