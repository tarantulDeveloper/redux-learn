export const TOP_UP = "TOP_UP";
export const WITHDRAW = "WITHDRAW";
export const ASYNC_WITHDRAW = "ASYNC_WITHDRAW";
export const ASYNC_TOP_UP = "ASYNC_TOP_UP";

const initialState = {
  money: 0,
};

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOP_UP:
      return { ...state, money: state.money + 1 };
    case WITHDRAW:
      return { ...state, money: state.money - 1 };
    default:
      return state;
  }
};

export const topUpAction = () => ({type: TOP_UP});
export const withdrawAction = () => ({type: WITHDRAW});
export const asyncTopUpAction = () => ({type: ASYNC_TOP_UP});
export const asyncWithdrawAction = () => ({type: ASYNC_WITHDRAW})
