import { takeEvery, put, call, all } from "redux-saga/effects";
import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import * as API from "./services";
import { IUser } from "../models";

function* fetchUsers() {
  try {
    const response: IUser[] = yield call(API.getUsers);
    yield put(actions.getUsersSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actions.getUsersFailed(error));
  }
}

export default function* watch() {
  yield all([takeEvery(actionTypes.GET_USERS, fetchUsers)]);
}
