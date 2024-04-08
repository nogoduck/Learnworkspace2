import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  console.log("dispatch >> ", dispatch);

  return (
    <div>
      <h1>Home</h1>
      <button>고양이 추가하기</button>
    </div>
  );
}

export default Home;
