import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <p>HBD-MIJEONG</p>
        <div>
          <a href="https://www.facebook.com/profile.php?id=100064560693847">
            <img src="/img/footer/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/subin_253/">
            <img src="/img/footer/instagram.png" alt="" />
          </a>
          <a href="https://github.com/waterbeen0530">
            <img src="/img/footer/github.png" alt="" />
          </a>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #343a40;
`;

const Wrapper = styled.div`
  width: 80vw;
  height: 18vh;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
    font-size: 80px;
  }
  img {
    width: 20%;
  }
`;
