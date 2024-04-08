const initalState = {
  clickCnt: 0,
};

const ADD = "home/ADD";

export const addClickHome = () => {
  return { type: ADD, clickCnt: 25600 };
};

export default function (state = initalState, action) {
  if (action.type === "home/ADD") {
    return { clickCnt: state.clickCnt + 10 };
  }

  return state;
}
