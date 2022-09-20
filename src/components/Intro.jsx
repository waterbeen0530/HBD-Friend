import React from "react";
import styled from "styled-components";

export default function Intro() {
  const items = [
    {
      title: "응애 시절",
      text: "유난히 내성적이었던 어린 미정쌤",
      src: "/img/Intro/babe.jpg",
    },
    {
      title: "칼바람 시절",
      text: "범상치 않은 학창 시절을 보낸 미정쌤",
      src: "/img/Intro/knife.jpg",
    },
    {
      title: "현재 모습",
      text: "현재는 갓생 사시는중",
      src: "/img/Intro/mzome.jpg",
    },
  ];

  const portList = items.map((list, i) => (
    <Frame key={i}>
      <img src={list.src} alt="" />
      <h2>{list.title}</h2>
      <p>{list.text}</p>
    </Frame>
  ));

  return (
    <Content id="life">
      <img className="deco1" src="/img/Intro/deco1.svg" alt="" />
      <img className="deco2" src="/img/Intro/deco2.svg" alt="" />
      <Container>
        <h1>이미정 일대기</h1>
        <Wrapper>{portList}</Wrapper>
      </Container>
    </Content>
  );
}

const Content = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #343a40;
  .deco1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    z-index: 5;
  }
  .deco2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35%;
    z-index: 5;
  }
  @media (max-width: 500px) {
    .deco1 {
      width: 70%;
    }
    .deco2 {
      width: 70%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    gap: 80px;
    margin-top: -90px;
    h1 {
      z-index: 10;
    }
  }
`;

const Wrapper = styled.div`
  z-index: 10;
  gap: 80px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const Frame = styled.div`
  width: 320px;
  height: 100%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
  img {
    width: 100%;
    padding: 60px 0 0;
  }
  & > h2 {
    margin: 25px 0 10px 0;
    font-size: 30px;
    text-align: center;
  }
  p {
    margin: 20px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 120px;
    border-radius: 10px;
    img {
      padding-top: 30px;
    }
    h2 {
      margin: 10px 0 0 0;
      font-size: 18px;
    }
    p {
      margin: 5px 20px;
      font-size: 10px;
    }

    &:first-child {
      margin-top: -170px;
    }

    &:last-child {
      margin-bottom: -170px;
    }
  }
`;
