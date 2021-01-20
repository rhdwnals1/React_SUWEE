import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { componentGuide, line } from "../../../src/Styles/CommonStyle";
import { FIRST_API, INFO_API } from "../../config";

function IntroduceBook() {
  const [text, setText] = useState([]);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [closed, setClosed] = useState(false);
  const toggleMoreBtn = () => {
    setClosed(!closed);
  };

  // console.log(`${INFO_API}/12`);

  useEffect(() => {
    fetch(FIRST_API)
      .then((res) => res.json())
      .then((res) => setText(res.ThirdSection.Content));

    fetch(FIRST_API)
      .then((res) => res.json())
      .then((res) => setData(res.ThirdSection.Category));

    fetch(FIRST_API)
      .then((res) => res.json())
      .then((res) => setList(res.ThirdSection.List));
  }, []);

  return (
    <ThirdContainer>
      <FirstBox>
        <h1>책 소개</h1>
        <BookContent>
          <FirstContent className={closed ? "" : "close"}>
            {text.Content}
          </FirstContent>
        </BookContent>
        <Button onClick={toggleMoreBtn}>
          {closed ? "접어 두기" : "더보기"}
        </Button>
        <BookBox>
          {data.map((data) => {
            return (
              <>
                <Item>
                  <span>{data.name}</span>
                  <span>{data.value}</span>
                </Item>
                <Line />
              </>
            );
          })}
        </BookBox>
      </FirstBox>
      {list.map((list) => {
        return (
          <>
            <SecondBox>
              <span>{list.name}</span>
              <img src={list.list_url} alt="img"></img>
            </SecondBox>
            <UnderLine />
          </>
        );
      })}
      <ThickLine />
      <ThirdBox>
        <div className="alladin">
          <img src="./images/alladin.png" alt="alladin" />
          <span>알라딘</span>
        </div>
        <div className="buyBook">
          <span>종이책 구매하기</span>
          <img src="./images/rightArrow.png" alt="arrow" />
        </div>
      </ThirdBox>
    </ThirdContainer>
  );
}

const ThirdContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${componentGuide}
`;

const FirstBox = styled.div`
  h1 {
    padding: 24px 24px 0;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
    letter-spacing: -0.4px;
  }
`;

const BookContent = styled.div`
  box-sizing: border-box;
  max-height: 100%;
  width: 100%;
  margin-bottom: 26px;
  color: #555;
  line-height: 22px;
  font-size: 14px;
  padding: 0 24px;
`;

const FirstContent = styled.div`
  line-height: 2;
  max-height: 100%;
  font-size: 14px;
  color: rgb(85, 85, 85);
  line-height: 30px;
`;

const Button = styled.button`
  position: absolute;
  margin-right: 24px;
  background-color: transparent;
  right: 0;
  top: 18px;
  font-size: 14px;
  color: rgb(164, 81, 247);
  font-weight: 500;
  border-radius: 3px;
  border: 1px solid #ffffff;
  cursor: pointer;
`;

const BookBox = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  background-color: #fafbf6;
`;

const Item = styled.div`
  width: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;

  span {
    &:first-child {
      font-size: 12px;
      color: #8b8b8b;
      margin-bottom: 14px;
      letter-spacing: -0.4px;
    }

    &:last-child {
      font-size: 14px;
      color: #555;
      text-align: center;
      font-weight: bolder;
    }
  }
`;

const Line = styled.div`
  ${line};

  &:last-child {
    ${line};
    height: 0%;
  }
`;

const SecondBox = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 24px;
  justify-content: space-between;
  text-align: center;

  span {
    font-weight: 700;
    font-size: 16px;
    padding-top: 3px;
    letter-spacing: -0.4px;
    height: 25px;
    align-items: center;
  }

  img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    margin-top: 7px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f7f7f7;
`;

const ThickLine = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f7f7f7;
`;

const ThirdBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;

  .alladin {
    box-sizing: border-box;
    display: flex;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      font-size: 14px;
      color: #242424;
      line-height: 1.3;
      padding: 5px 0 0 10px;
    }
  }

  .buyBook {
    box-sizing: border-box;
    display: flex;

    span {
      color: #8b8b8b;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      line-height: 1.15;
      padding: 5px 5px 0 0;
    }

    img {
      width: 12px;
      height: 12px;
      margin-top: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default IntroduceBook;
