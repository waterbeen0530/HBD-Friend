import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <Container id="main">
      <img id="deco1" src="/img/main/deco1.png" alt="" />
      <img id="deco2" src="/img/main/deco2.png" alt="" />
      <div>
        <h1>
          Happy
          <br />
          BirthDay!
        </h1>
        <p>미정쌤 생신 축하드려요!-2022.09.18</p>
      </div>
      <img src="/img/main/mainCake.svg" alt="" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  gap: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe3e3;
  color: #343a40;
  div {
    z-index: 10;
    h1 {
      margin: 0;
      font-size: 100px;
    }
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
  img {
    width: 40%;
    z-index: 10;
  }
  #deco1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    z-index: 5;
  }
  #deco2 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    z-index: 5;
  }
`;
