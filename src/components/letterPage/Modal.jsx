import styled from "styled-components";

const Modal = ({ view, letter }) => {
  return (
    view && (
      <Container>
        <ModalWrap onClick={letter}>
          <p>To. 미정쌤</p>
          <p>
            아무튼 생축 <br /> (이하생략..) <br /> 임수빈 올림
          </p>
        </ModalWrap>
      </Container>
    )
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #20202060;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 20px;
  background-color: white;
`;

export default Modal;
