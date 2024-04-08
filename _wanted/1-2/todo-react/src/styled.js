import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 0;
    color: blue;
    text-decoration: underline;
  }

  section {
    display: flex;
    padding: 0 1em;
    gap: 1em;

    article {
      flex: 1;

      dl {
        border: 1px solid #9c9c9c;
        border-radius: 4px;
        padding: 2em;
        text-align: start;

        display: flex;
        flex-direction: column;
        gap: 12px;

        dt {
          font-weight: 800;
        }

        dd {
          padding: 0;
          margin: 0;
        }

        button {
          padding: 0;
          width: 120px;
        }
      }
    }

    #input-container {
      display: flex;
      height: calc(100vh - 5em);
      justify-content: center;
      align-items: center;
    }
  }
`;
