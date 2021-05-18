import { Reducer } from "redux";
import * as actionTypes from "./actionTypes";
import { State } from "../models";

const InitialState: State = {
  usersList: null,
};

const RootReducer: Reducer<State> = (state = InitialState, action): State => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        usersList: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default RootReducer;
