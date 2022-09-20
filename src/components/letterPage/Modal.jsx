import styled from "styled-components";
import styles from "../../styles/App.module.css";

const Modal = ({ view, letter }) => {
  return (
    view && (
      <Container>
        <ModalWrap className={styles.loveLetter}>
          <Wrapper>
            <p>To. 미정쌤💕</p>
            <span>
              미정쌤 생신 정말 축하드려요..!!!! <br /> 어떤 선물을 드릴지 수많은
              고심 끝에
              <br /> 결국 질러버렸습니다.. <br /> 제가 만든 킹 갓 제네럴
              메타버스 선물입니다..
              <br /> (팩트: 사실 어디가서 이거보고 메타버스라고 하면 암살당함.){" "}
              <br /> 아무튼 미정쌤 늘 감사하고 죄송하고 사랑합니다..^__^ <br />
              늘 건강하고 행복하세요! <br /> <br />
              2022.09.18 <br /> -임수빈 올림-
            </span>
            <button onClick={letter}>✖</button>
          </Wrapper>
        </ModalWrap>
      </Container>
    )
  );
};
const Container = styled.div`
  position: absolute;
  width: 98.9vw;
  height: 100vh;
  background-color: #20202060;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const ModalWrap = styled.div`
  width: 600px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff5f5;
  @media (max-width: 500px) {
    width: 290px;
    height: 470px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 95%;
  height: 90%;
  border: 3px dashed #ff8787;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    margin: 15px 0;
    font-size: 22px;
    font-weight: 600;
    color: #343a40;
  }
  span {
    margin: 0;
    font-size: 19px;
    font-weight: 600;
    color: #343a40;
  }
  button {
    position: absolute;
    top: 3.5px;
    right: 5px;
    width: 32px;
    height: 32px;
    margin-top: 0;
    border-radius: 20px;
    border: none;
    font-size: 22px;
    color: #343a40;
    background: #fff5f5;
    transition: all 0.4s;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 90%;
    height: 94%;

    span {
      padding: 0 10px;
    }
  }
`;

export default Modal;
