import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      메인 화면 입니다.
      <Link to="/">홈</Link>
      <Link to="/cat">고양이</Link>
      <Link to="/dog">강아지</Link>
    </>
  );
};

export default Home;
