import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h2>MZOME</h2>

      <div>
        <p>두근두근편지</p>
        <p>이미정 일대기</p>
        <p>심리테스트</p>
        <p>DEVELOPER</p>
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
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
