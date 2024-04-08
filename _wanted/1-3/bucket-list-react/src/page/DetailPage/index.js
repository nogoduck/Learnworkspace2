import { useNavigate, useParams } from "react-router-dom";
import { Container, InputContainer } from "../MainPage/styled";
import { Content } from "./styled";
import { useState } from "react";

const DetailPage = (props) => {
  const { bucket } = useParams();
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  return (
    <>
      <Container>
        <h1>내 버킷리스트</h1>
        <hr />
        <Content>{bucket}</Content>
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
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

export default DetailPage;
