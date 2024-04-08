import { useDispatch, useSelector } from "react-redux";
import { addClickHome } from "./redux/modules/home";

const Home = () => {
  const homeState = useSelector((state) => state.home);
  const dispatch = useDispatch();

  console.log("homeState >> ", homeState);

  return (
    <>
      <h1>
        Home
        <span style={{ fontsize: "1rem" }}>{homeState.clickCnt}</span>
      </h1>
      <button
        onClick={() => {
          dispatch(addClickHome());
        }}
      >
        증감
      </button>
    </>
  );
};

// const Cat = (props) => {
//   return (
//     <>
//       <h1>
//         Cat <span style={{ fontSize: "1rem" }}>{props.a}</span>
//       </h1>
//       {props.cats && props.cats.map((v) => <h3>{v}</h3>)}
//     </>
//   );
// };

const Dog = () => {
  return (
    <>
      <h1>Dog</h1>
    </>
  );
};

export { Home, Dog };
// export { Index, Cat, Dog };
