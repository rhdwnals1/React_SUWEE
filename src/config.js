const IP_ADDRESS = "13.125.154.100";

// Main

// Mock Data
// 오늘의 책 API
export const TODAYBOOK_API = `http://${IP_ADDRESS}:8000/books/today`;

// 한달 이내에 출간된 책 API
export const BOOKLIST = `http://${IP_ADDRESS}:8000/books/recently?day=30&limit=20`;

// 지금 서점 베스트셀러 API
export const BESTSELLER_API = `http://${IP_ADDRESS}:8000/books/bestseller?keyword=1&limit=10`;

// 이번 주 취향별 추천 책 API
export const RECOMMENDEDBOOK_API = `http://${IP_ADDRESS}:8000/books/recommend?keyword=6&limit=6`;

// 커밍순 놓치기 아쉬운 책 API
export const COMMINGSOONBOOK_API = `http://${IP_ADDRESS}:8000/books/commingsoon?day=100&limit=20`;

// 내서재 BookRoom
export const BOOKROOM_BOOKLIST_API = `http://${IP_ADDRESS}:8000/library/books`;
export const BOOKROOM_USER_API = `http://${IP_ADDRESS}:8000/library`;

//Login
export const KAKAO_API =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/kakao_sign_in";
export const CERTIFY_REQUEST =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/authSMS";
export const DUBBLE_CHECK =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/sign_up";
export const SIGN_IN =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/sign_in";
export const TEST = "http://test";

export const LIBRARY_IMG = "/images/libraryimg.png";

export const CHECK_IMG = "/images/checked.png";

export const FIRST_API = "/data/data.json";

export const INFO_API = "http://192.168.200.184:8000/books";
export const REVIEW_API = "http://192.168.200.184:8000/books/24/review";
export const BOOKROOM_STATISTIC_API = `http://${IP_ADDRESS}:8000/library/statistics`;
