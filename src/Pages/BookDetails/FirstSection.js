import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  componentGuide,
  boxShadow,
  line,
} from "../../../src/Styles/CommonStyle";
import { FIRST_API } from "../../config";

function FirstSection() {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(FIRST_API)
      .then((res) => res.json())
      .then((res) => setInfo(res.FirstSection.BookInfo));

    fetch(FIRST_API)
      .then((res) => res.json())
      .then((res) => setData(res.FirstSection.Table));
  }, []);

  // console.log(info);
  return (
    <FirstContainer>
      <Img>
        <img src={info.img_url} alt="book" />
      </Img>
      <Wrapper>
        <BookInfo>
          <BookName>{info.book_name}</BookName>
          <Author>{info.author}</Author>
          <div className="text">
            내 서재에 담긴 책 5권 이상부터 취향지수 제공
            <img src="./images/question.png" alt="question" />
          </div>
        </BookInfo>
        <Box>
          {data.map((data) => {
            return (
              <>
                <Table>
                  <img src={data.image_url} alt="book_img" />
                  <div>{data.text}</div>
                  <div>{data.people}</div>
                </Table>
                <Line />
              </>
            );
          })}
        </Box>
      </Wrapper>
    </FirstContainer>
  );
}

const FirstContainer = styled.section`
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding: 32px 24px;
  ${componentGuide}
`;

const Img = styled.div`
  img {
    height: 316px;
    width: 220px;
    border-radius: 0 6px 6px 0;
  }
  ${boxShadow}
`;

const Wrapper = styled.div`
  width: 100%;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const BookName = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 2px;
`;

const Author = styled.div`
  margin-bottom: 16px;
  font-size: 12px;
  color: #8b8b8b;
`;

const BookInfo = styled.div`
  margin-bottom: 30px;
  line-height: 1.6;
  font-size: 14px;
  position: relative;

  .text {
    display: flex;
    font-size: 15px;
    line-height: 1.15;

    img {
      height: 15px;
      width: 15px;
      margin-left: 3px;
    }
  }
`;

const Line = styled.div`
  ${line};
  height: 40%;

  &:last-child {
    ${line};
    height: 0%;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 88px;
  margin-top: auto;
  border-radius: 12px;
  background-color: #fafaf6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  line-height: 0.5px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    top: 5px;
  }

  div {
    display: flex;
    font-size: 10px;
    color: #929390;
    letter-spacing: -0.4px;

    &:first-child {
      font-size: 10px;
      line-height: 17px;
      color: #8b8b8b;
      margin-top: 2px;
      text-align: center;
    }

    &:last-child {
      font-size: 14px;
      font-weight: bolder;
      color: #555;
    }
  }
`;

export default FirstSection;
