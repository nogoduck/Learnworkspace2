import styled from "styled-components";

export const Container = styled.div`
  margin: 24px;
  padding: 16px;
  border-radius: 8px;

  border: 2px solid #dcdcdc;

  h1 {
    font-family: "Noto Sans", sans-serif;

    color: #6959cd;
    text-align: center;
  }

  hr {
    border: 2px dotted #dcdcdc;
    margin: 24px 0;
  }

  .bucket-item {
    a {
      background-color: #f0f8ff;
      display: block;
      padding: 16px;
      margin: 24px 12px;

      color: #000;
      font-weight: 400;
      text-decoration: none;
    }
  }
`;

export const InputContainer = styled.div`
  input {
    font-family: "Noto Sans", sans-serif;
  }

  margin: 24px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #dcdcdc;
`;
