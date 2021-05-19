import * as actionTypes from "./actionTypes";
import { IUser } from "../models";

export function getUsers() {
  return {
    type: actionTypes.GET_USERS,
  };
}

export function getUsersSuccess(payload: IUser[]) {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload,
  };
}

export function getUsersFailed(payload: string) {
  return {
    type: actionTypes.GET_USERS_FAILED,
    payload,
  };
}

export function addToSelectedList(payload: string) {
  return {
    type: actionTypes.ADD_TO_SELECTED_LIST,
    payload,
  };
}
export function removeFromSelectedList(payload: string) {
  return {
    type: actionTypes.REMOVE_FROM_SELECTED_LIST,
    payload,
  };
}
