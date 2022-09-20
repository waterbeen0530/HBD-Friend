import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <Container id="main">
      <img className="deco1" src="/img/main/deco1.png" alt="" />
      <img className="deco2" src="/img/main/deco2.png" alt="" />
      <Wrapper>
        <h1>
          Happy
          <br />
          BirthDay!
        </h1>
        <p>미정쌤 생신 축하드려요!-2022.09.18</p>
      </Wrapper>
      <img className="cake" src="/img/main/mainCake.svg" alt="" />
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

  & > img.deco1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    z-index: 5;
  }
  & > img.deco2 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    z-index: 5;
  }
  & > img.cake {
    z-index: 10;
    width: 40%;
    margin-right: -80px;
    /* margin-bottom: -50px; */
  }
  @media (max-width: 500px) {
    height: 100vh;
    gap: 200px;
    display: flex;
    flex-direction: column;
    & > img.deco1 {
      width: 60%;
    }
    & > img.deco2 {
      width: 70%;
    }
    & > img.cake {
      z-index: 10;
      width: 80%;
      margin-right: -80px;
    }
  }
`;

const Wrapper = styled.div`
  z-index: 10;
  h1 {
    margin: 0;
    font-size: 100px;
  }
  p {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 500px) {
    margin-left: -100px;
    margin-top: 25px;
    h1 {
      margin-left: 15px;
      font-size: 50px;
    }
    p {
      font-size: 16px;
    }
  }
`;
