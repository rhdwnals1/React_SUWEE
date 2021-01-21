import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { componentGuide, bookShadow } from "../../../src/Styles/CommonStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FIRST_API } from "../../config";

const StyledSlider = styled(Slider)`
  ${componentGuide}
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
`;

function SlickSlider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(FIRST_API)
      .then((res) => res.json())
      .then((res) => setData(res.Recommend.Book));
  }, []);

  const settings = {
    dots: true, // 캐러셀의 점을 보여줄 것 인지
    infinite: true, // 마지막장 다음에 첫장이 나오게 할 지
    speed: 500, // 넘어가는 속도
    autoplay: true, // 자동으로 재생할지
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider>
      <div>
        <Title>다른 회원들이 함께 담은 책</Title>
        <Slider {...settings}>
          {data.map((data) => {
            return (
              <Book>
                <img src={data.src} alt="book" />
                <BookInfo>
                  <div>{data.name}</div>
                  <div>{data.author}</div>
                </BookInfo>
              </Book>
            );
          })}
        </Slider>
      </div>
    </StyledSlider>
  );
}

const Title = styled.div`
  margin: 20px 0 0 20px;
  font-size: 18px;
  font-weight: 700;
`;

const Book = styled.div`
  width: 145px;
  height: 235px;
  margin-top: 20px;
  padding: 0 10px;
  ${bookShadow}
`;

const BookInfo = styled.div`
  div {
    letter-spacing: -0.4px;

    &:first-child {
      color: #242424;
      font-size: 16px;
      font-weight: 700;
      margin: 20px 0 3px;
    }

    &:last-child {
      color: #6f6f6f;
      font-size: 13px;
      margin-top: 10px;
    }
  }
`;

export default SlickSlider;
