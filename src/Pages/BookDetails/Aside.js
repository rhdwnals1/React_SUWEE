import React from "react";
import styled from "styled-components";

function Aside({
  setIsActiveReadNow,
  isActiveReadNow,
  isSaved,
  setIsSaved,
  onSave,
}) {
  return (
    <AsideContainer>
      <Wrapper>
        <List>
          {/* <Menu isSaved={isSaved} setIsSaved={setIsSaved}>
            <img src={isSaved ? LIBRARY_IMG : CHECK_IMG} alt="save" />
            <button onClick={onSave}>
              내 서재에 담기
              {isSaved ? "담기 완료" : "내 서재에 담기"}
            </button>
          </Menu> */}
          <Menu>
            <img src="/images/libraryimg.png" alt="save" />
            <div>내 서재에 담기</div>
          </Menu>
          <Menu>
            <img src="/images/write.png" alt="post" />
            <div>포스트 쓰기</div>
          </Menu>
          <Menu>
            <img src="/images/share.png" alt="share" />
            <div>공유하기</div>
          </Menu>
        </List>
        <Read onClick={() => setIsActiveReadNow(!isActiveReadNow)}>
          바로 읽기
        </Read>
      </Wrapper>
    </AsideContainer>
  );
}

export default Aside;

const AsideContainer = styled.div`
  width: 280px;
  position: relative;
`;

const Wrapper = styled.aside`
  position: fixed;
  width: 280px;
  height: 100%;
  top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
`;

const List = styled.div``;

const Menu = styled.div`
  width: 260px;
  height: 48px;
  padding-left: 22px;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  div {
    padding-left: 10px;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    line-height: 48px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const Read = styled.button`
  position: fixed;
  bottom: 10px;
  width: 247px;
  height: 50px;
  color: white;
  background-color: #333333;
  border-radius: 7px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;
