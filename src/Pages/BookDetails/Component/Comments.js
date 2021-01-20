import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FIRST_API } from "../../../config";

function Comments() {
  const [info, setInfo] = useState([]);
  const [heartColor, setHeartColor] = useState(false);

  useEffect(() => {
    fetch(FIRST_API)
      .then((res) => res.json())
      .then((res) => setInfo(res.Review.Comment));
  }, []);

  const handleOnClick = (item) => {
    setHeartColor(!heartColor);
    const newInfo = [...info].map((el) => {
      if (el.id === item.id) {
        return {
          ...el,
          isLike: true,
        };
      } else {
        return el;
      }
    });
    // setInfo(newInfo);
    // setHeartColor(!isLike);
    //   if (el.id === item.id) {
    //     return {
    //       ...el,
    //       count: el.count + 1,
    //     };
    //   } else {
    //     return el;
    //   }
    // });
    // setInfo(newInfo);
  };

  console.log(info);
  return (
    <>
      {info.map((item) => {
        return (
          <CommentBox>
            <img src={item.user_img} alt={item.alt} />
            <CommentInfo>
              <div>{item.user_name}</div>
              <div>{item.date}</div>
              <div>{item.text}</div>
              <span>이 리뷰가 마음에 드시나요?</span>
              <Heart id={item.id} onClick={() => handleOnClick(item)}>
                <img
                  src={item.isLike ? "/images/heart1.png" : "/images/heart.png"}
                  alt="사진"
                />

                <p>{item.count}</p>
              </Heart>
            </CommentInfo>
          </CommentBox>
        );
      })}
    </>
  );
}

const CommentBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 20px 0;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;

  div {
    &:first-child {
      box-sizing: border-box;
      font-size: 12px;
      color: #555;
      margin: 2px 0;
    }

    &:nth-child(2) {
      box-sizing: border-box;
      font-size: 10px;
      color: #a5a5a5;
      padding-bottom: 2px;
      line-height: 15px;
      margin-bottom: 3px;
    }

    &:nth-child(3) {
      box-sizing: border-box;
      font-size: 14px;
      color: #555;
      margin: 10px 0;
    }

    &:hover {
      cursor: pointer;
    }
  }

  span {
    box-sizing: border-box;
    color: #a5a5a5;
    font-size: 12px;
    letter-spacing: -0.4px;
    line-height: 1.3;
    margin-top: 8px;
  }
`;

const Heart = styled.div`
  display: flex;
  align-items: center;
  width: 47px;
  height: 23px;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  position: absolute;
  right: 1px;
  top: 40%;
  bottom: 40%;
  padding: 0 5px;

  img {
    width: 15px;
    height: 15px;
  }

  span {
    font-size: 15px;
    color: #dfdfdf;
    text-align: center;
  }

  i {
    transition: 0.3s;
    margin: 0 2px;
    color: #dfdfdf;
    font-size: 15px;
    color: #8b8b8b;
    width: 10px;
    height: 10px;
    border: 1px solid red;

    &:active {
      transform: scale(1.3);
    }
  }
`;
export default Comments;
