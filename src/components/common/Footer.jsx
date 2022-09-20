import styled from "styled-components";

export default function Footer() {
  return (
    <Container id="footer">
      <Wrapper>
        <p>HBD-MIJEONG</p>
        <Frame>
          <a href="https://www.facebook.com/profile.php?id=100064560693847">
            <img src="/img/footer/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/subin_253/">
            <img src="/img/footer/instagram.png" alt="" />
          </a>
          <a href="https://github.com/waterbeen0530/HBD-Friend">
            <img src="/img/footer/github.png" alt="" />
          </a>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #343a40;
  @media (max-width: 500px) {
    height: 25vh;
  }
`;

const Wrapper = styled.div`
  width: 75vw;
  height: 18vh;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  align-items: flex-end;
  justify-content: space-between;
  p {
    margin: 0;
    font-size: 72px;
  }
  @media (max-width: 500px) {
    height: 50%;
    margin-bottom: -20px;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    p {
      margin: 0;
      font-size: 40px;
    }
  }
`;

const Frame = styled.div`
  gap: 3px;
  display: flex;
  margin-bottom: 20px;
  img {
    width: 60%;
  }
  @media (max-width: 500px) {
    gap: 20px;
    margin: 0;
    a {
      width: 30px;
    }
    img {
      width: 100%;
    }
  }
`;
