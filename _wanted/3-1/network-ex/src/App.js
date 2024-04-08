import "./App.css";
import { useState } from "react";
import { Container } from "./styled";
import axios from "axios";

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // const [validate, setValidate] = useState(false);

  return (
    <Container>
      <h4>로그인</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (password.length < 4) {
            setPassword("");
          }

          console.log("click");

          console.log(id);
          console.log(password);

          axios
            .get("http://localhost:5000/users", {
              params: { id, password },
            })
            // Q1. 응답 결과 받을 때 의문
            // A1.

            // Q2. 중복을 제거하는 코드가 때로는 더 복잡하게 짜질때가 있는데 이런경우는 중복을 감안하고 본래 코드를 두는게 좋나요?
            // A2.

            .then((res) => {
              console.log("res >> ", res);
              console.log(res.data);

              localStorage.setItem("access_token", res.data?.[0].access_token);
            })
            .catch((err) => {
              console.log("err >> ", err);
            });
        }}
      >
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <button type="submit">로그인</button>
      </form>
    </Container>
  );
}

export default App;
