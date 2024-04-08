import { Container, InputContainer } from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = (props) => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  return (
    <>
      <Container>
        <h1>내 버킷리스트</h1>
        <hr />
        <div className="bucket-item">
          {list.map((v) => (
            <Link to={`/detail/${v}`}>{v}</Link>
          ))}
        </div>
      </Container>
      <InputContainer>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setList([...list, value]);
            setValue("");
          }}
        >
          추가하기
        </button>
      </InputContainer>
    </>
  );
};

export default MainPage;
