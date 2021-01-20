import React, { useEffect, useState } from "react";
import CommentBox from "./Component/CommentBox";
import styled from "styled-components";
import { componentGuide } from "../../Styles/CommonStyle";
import Comments from "./Component/Comments";

function Comment() {
  const [isActiveMoreBtn, setIsActiveMoreBtn] = useState(false);
  const [commentBox, setCommentBox] = useState([]);
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  //댓글 추가 기능
  const handleOnClick = () => {
    const prevComments = [...commentBox];
    if (value.trim() === "") return "";
    prevComments.push({
      id: Date.now(),
      nickName: "im_zulie",
      date: "2020.12.11",
      content: value,
      count: 0,
      isLike: true,
    });
    setCommentBox(prevComments);
    setValue("");
  };

  //댓글 좋아요 기능
  const handleLike = (item) => {
    console.log("item : ", item);
    const newCommentBox = [...commentBox].map((el) => {
      if (item.id === el.id) {
        el.isLike = !el.isLike;
      }
      if (!el.isLike) {
        el.count = 1;
      }
      if (el.isLike) {
        el.count = 0;
      }
      return el;
    });
    setCommentBox(newCommentBox);
  };

  return (
    <CommentContainer>
      <div className="text">
        <h1>한 줄 리뷰</h1>
        {/* <span>{content.length}</span> */}
      </div>
      <Comments />
      {commentBox.map((item, idx) => {
        return (
          <CommentBox
            commentBox={commentBox}
            handleLike={() => handleLike(item)}
            key={idx}
            nickName={item.nickName}
            date={item.date}
            content={item.content}
            id={item.id}
            count={item.count}
            isLike={item.isLike}
          />
        );
      })}
      <AddComment>
        <img src="./images/profile.png" alt="user" />
        <div>
          <input
            maxLength="50"
            value={value}
            onChange={handleOnChange}
            // onKeyDown={handleEnter}
            placeholder="한 줄 리뷰를 남겨주세요"
          />
          <Button onClick={handleOnClick}>등록</Button>
        </div>
      </AddComment>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  padding: 24px;
  position: relative;
  height: 100%;
  ${componentGuide}

  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    display: flex;
    font-size: 16px;
    font-weight: 700;
  }
`;

const AddComment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 10px;
  }

  div {
    width: 100%;
    height: 48px;
    border: 1px solid #dfdfdf;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      margin-left: 20px;
      width: 100%;
      border-style: none;
      outline-style: none;

      &::placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #dfdfdf;
      }
    }
  }
`;

const Button = styled.button`
  width: 63px;
  height: 30px;
  border-radius: 5px;
  font-size: 12px;
  border-style: none;
  margin-right: 10px;
  background-color: #dfdfdf;
  color: #c1c1c1;
`;

export default Comment;
