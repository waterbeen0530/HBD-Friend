import styled from "styled-components";

export default function MondPotato({ view, food }) {
  return (
    view && (
      <Container>
        <Modal>
          <div>
            <p>
              당신은 '몬드 감자전'을
              <br />
              '달콤달콤 닭고기 스튜'보다 더 좋아하는 사람입니다!
            </p>
            <span>
              당신은 '몬드 감자전'을 먹고 탄수화물 중독에
              걸렸습니다.(+셀룰라이트 기여)
            </span>
            <img src="/img/test/cocaloopy.png" alt="" />
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
  width: 100vw;
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
    img {
      width: 37%;
    }
  }
`;
