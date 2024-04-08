// const initialState = {
//   cat_arr: ["펄이", "루비"],
// };
//
// // 값을 지정했다
// // 이젠 값을 변경할 수 있는 코드를 작성해줘야한다.
//
// // 리덕스 특징
// // 바꾸는 행위 자체를 이름을 붙여줘야한다. 그것을 액션이라고 부른다.
//
// const ADD = "cat/ADD";
//
// // 우리가 할 액션:
// // cat/ADD를 부르면 state에서 car_arr를 찾아서 '고양이'를 넣어준다.
//
// export const addCat = (cat_name) => {
//   return { type: ADD, cat: cat_name };
// };
//
// // 이 함수를 리듀서안에서 해준다 리듀서가 값을 처리하는 기능을 가진다.(함수여야한다)
//
// export default function (state = initialState, action) {
//   if (action.type === "cat/ADD") {
//     return { cat_arr: [...state.cat_arr, action.cat] };
//   }
//
//   return state;
// }
