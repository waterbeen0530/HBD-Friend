import React from "react";
import styled from "styled-components";
import mainCake from "../components/util/assets/image/mainCake.svg";
import deco1 from "../components/util/assets/image/deco1.png";
import deco2 from "../components/util/assets/image/deco2.png";

export default function Main() {
  return (
    <Container>
      <img id="deco1" src={deco1} alt="" />
      <img id="deco2" src={deco2} alt="" />
      <div>
        <h1>
          Happy
          <br />
          BirthDay!
        </h1>
        <p>미정쌤 생신 축하드려요!-2022.09.18</p>
      </div>
      <img src={mainCake} alt="" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
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
      font-size: 115px;
    }
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
  img {
    width: 600px;
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
