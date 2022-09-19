import React, { useState } from "react";
import styled from "styled-components";
import MondPotato from "./MondPtato";
import Sweetchicken from "./SweetChicken";

const potato =
  "https://w.namu.la/s/ab76e1e820ca47a978c90f57d5078d1b36a213ecac994e9c22173412560f8cb720feff4cbf7742772ca9aa9d4f6c11f3c3ccac9752dc39ef87d423c16b33165b4b4d78d397234418f1316220ce8c15aae6ff634d0fb587a5995aaad13c2d8796";
const chicken =
  "https://w.namu.la/s/4d3f850c098edf2d5f022be909e376040aa9472b4ce25cad986cdb8da509945fa2451ab3497f71b5c6e8103f28a331a15f706931b4a2caa4b8065004fa26ef318382115de8cab56e9b34a0f6c42700d972fd5036c88b89758e123cdcc57a8dea";

export default function Test() {
  const [mond, setMond] = useState(false);
  const [sweet, setSweet] = useState(false);

  const onClick1 = () => {
    setMond((pre) => !pre);
  };

  const onClick2 = () => {
    setSweet((pre) => !pre);
  };
  return (
    <Container>
      <h2>무근본 심리 테스트</h2>
      <p>
        어느날, 배고픈 당신 앞에 두 가지 음식이 놓이게 되는데..
        <br />
        당신의 선택은?
      </p>
      <Wrapper>
        <div id="first" onClick={onClick1}>
          <img src={chicken} alt="" />
          <p>달콤달콤 닭고기 스튜</p>
          <span>⭐⭐</span>
        </div>
        <div id="second" onClick={onClick2}>
          <img src={potato} alt="" />
          <p>몬드 감자전</p>
          <span>⭐⭐⭐</span>
        </div>
      </Wrapper>
      <MondPotato view={mond} food={onClick1} />
      <Sweetchicken view={sweet} food={onClick2} />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #e9ecef;

  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0 0 10px;
    font-size: 50px;
  }
  p {
    margin: 10px 0 10px 0;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 40px;
  gap: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    position: relative;
    width: 470px;
    height: 470px;
    border-radius: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50%;
      margin-bottom: 45px;
      border: 5px solid #fff;
      border-radius: 20px;
    }
    p {
      position: absolute;
      bottom: 40px;
      font-size: 26px;
      color: #fff;
    }
    span {
      position: absolute;
      bottom: 30px;
    }
  }
  #first {
    background: #ff5e5e;
    transition: all 0.4s;
  }
  #first:hover {
    background: #f03e3e;
    cursor: pointer;
  }
  #second {
    background-color: #495057;
    transition: all 0.4s;
  }
  #second:hover {
    background-color: #343a40;
    cursor: pointer;
  }
`;
