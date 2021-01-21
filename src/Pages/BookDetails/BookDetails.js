import FirstSection from "./FirstSection";
import Nav from "../../Components/Nav/Nav";
import SecondSection from "./SecondSection";
import IntroduceBook from "./IntroduceBook";
import Aside from "./Aside";
import Comment from "./Comment";
import SlickSlider from "./SlickSlider";
import styled from "styled-components";

function BookDetails() {
  return (
    <Main>
      <Nav />
      <Wrapper>
        <FirstSection />
        <SecondSection />
        <IntroduceBook />
        <Comment />
        <ImageBox img src="/images/imgbox.png" alt="img" />
        <SlickSlider />
      </Wrapper>
      <Aside />
    </Main>
  );
}

const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 60px auto 0;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 999px;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 150px;
  margin-bottom: 1px;
`;

export default BookDetails;
