import {useDispatch} from "react-redux";

import {addCat} from "./redux/modules/cat";
import { addDog } from "./redux/slices/dog";

const Home = () => {

  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <div>
      <h1>Home</h1>
      <button onClick ={() => {

        dispatch(addCat("고양이"));
      }} >고양이 추가하기</button>
      <button onClick={() => {
        // dispatch(액션이 들어가야 해!);
        dispatch(addDog("달마시안"));
      }}>강아지 추가하기</button>
      
    </div>
  );
}

export default Home;