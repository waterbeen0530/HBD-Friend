import styled from "styled-components";

export default function SweetChicken({ view, food }) {
  return (
    view && (
      <Container>
        <Modal>
          <div>
            <p>
              당신은 '달콤달콤 닭고기 스튜'를
              <br />
              '몬드 감자전'보다 더 좋아하는 사람입니다!
            </p>
            <span>
              당신의 선택으로 인해 '몬드 감자전'은 버려졌습니다.(+지구온난화
              기여)
            </span>
            <img src="/img/test/loopy.png" alt="" />
            <button onClick={food}>✖</button>
          </div>
        </Modal>
      </Container>
    )
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 98.9vw;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20202060;
  text-align: center;
`;

const Modal = styled.div`
  width: 600px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #fff5f5;
  div {
    position: relative;
    width: 95%;
    height: 92%;
    border: 3px dashed #ff8787;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #343a40;
    p {
      font-size: 24px;
    }
    span {
      font-size: 14px;
    }
    button {
      position: absolute;
      top: 3.5px;
      right: 5px;
      width: 32px;
      height: 32px;
      margin: 0;
      border-radius: 20px;
      border: none;
      font-size: 22px;
      color: #343a40;
      background: #fff5f5;
      transition: all 0.4s;
      cursor: pointer;
    }
  }
`;
