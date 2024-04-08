const initalState = {
  cat_arr: [],
};

export const getCatArr = () => {
  return {
    type: "GET",
  };
};

export const addCat = (cat) => {
  return {
    type: "ADD",
    cat,
  };
};

export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case "GET":
      return state;
    case "ADD":
      console.log("state >> ", state);
      console.log("action >> ", action);
      return { ...state, cat_arr: [] };
    default:
      return state;
  }
}
