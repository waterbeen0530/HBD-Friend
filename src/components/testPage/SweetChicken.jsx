import styled from "styled-components";

export default function SweetChicken({ view, food }) {
  return (
    view && (
      <Container>
        <Modal onClick={food}>
          <p>
            당신은 '달콤달콤 닭고기 스튜'보다 '몬드 감자전'을 더 좋아하는
            사람입니다!
          </p>
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20202060;
  text-align: center;
`;

const Modal = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 20px;
  background-color: white;
`;
