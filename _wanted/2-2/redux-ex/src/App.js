import { Home, Cat, Dog } from "./Components";
import { useEffect, useState } from "react";

// 리덕스에서 제공하는 훅
// 갖다쓰는 것은 useSelector,
// 변경 요청을 보내는것은 useDispatch 훅을 제공합니다.
import { useSelector, useDispatch } from "react-redux";

// import { addCat } from "./redux/modules/cat";

function App() {
  const dispatch = useDispatch();
  //
  // const [a, setA] = useState(0);
  //
  // const myStoreData = useSelector((state) => state.cat.cat_arr);

  // useEffect(() => {
  //   console.log("CASE2 >> ", a);
  // }, [a]);

  return (
    <div className="App">
      {/*{a}*/}
      {/*<br />*/}

      {/*/!*  TEST  *!/*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    console.log("TEST >> ", a);*/}

      {/*    setA(10);*/}

      {/*    console.log("TEST >> ", a);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  변경 TEST*/}
      {/*</button>*/}

      {/*/!*  CASE 1  *!/*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    console.log("CASE 1 >> ", a);*/}

      {/*    setA(10, () => {*/}
      {/*      console.log("CASE 1 >> ", a);*/}
      {/*    });*/}
      {/*  }}*/}
      {/*>*/}
      {/*  CASE 1*/}
      {/*</button>*/}

      {/*<br />*/}
      {/*<br />*/}

      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    dispatch(addCat("고양이"));*/}
      {/*  }}*/}
      {/*>*/}
      {/*  고양이 추가*/}
      {/*</button>*/}

      <Home />
      {/*<Cat a={a} cats={myStoreData} />*/}
      <Dog />
    </div>
  );
}

export default App;
