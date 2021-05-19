import { Reducer } from "redux";
import * as actionTypes from "./actionTypes";
import { State } from "../models";

const InitialState: State = {
  usersList: null,
  selectedList: [],
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
    case actionTypes.ADD_TO_SELECTED_LIST: {
      const { payload } = action;
      let selectedEmployee;

      if (state.usersList) {
        selectedEmployee = state.usersList.find((el) => el.id === payload);
      }

      const updatedList = selectedEmployee
        ? [...state.selectedList, selectedEmployee]
        : [...state.selectedList];

      return {
        ...state,
        selectedList: updatedList,
      };
    }
    case actionTypes.REMOVE_FROM_SELECTED_LIST: {
      const { payload } = action;

      const updatedList = state.selectedList.filter((el) => el.id !== payload);

      return {
        ...state,
        selectedList: updatedList,
      };
    }
    default: {
      return state;
    }
  }
};

export default RootReducer;
