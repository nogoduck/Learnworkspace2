import { useSelector, useDispatch } from "react-redux";
import { addCat, removeCat } from "./redux/slices/cat";

function App() {
  const cats = useSelector((state) => state.cat.cat_arr);
  const dispatch = useDispatch();
  console.log("cats >> ", cats);

  return (
    <div className="App">
      <h1>고양이 종류</h1>
      {cats && cats.map((v) => <div>{v}</div>)}

      <button
        onClick={() => {
          dispatch(addCat());
        }}
      >
        추가
      </button>

      <button
        onClick={() => {
          dispatch(removeCat());
        }}
      >
        제거
      </button>
    </div>
  );
}

export default App;
