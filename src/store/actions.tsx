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
