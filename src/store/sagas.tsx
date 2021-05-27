import { takeEvery, put, call, all } from "redux-saga/effects";
import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import * as API from "./services";
import { IEmployee } from "../models";

function* fetchEmployees() {
  try {
    const response: IEmployee[] = yield call(API.getEmployees);
    yield put(actions.getEmployeesSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actions.getEmployeesFailed(error));
  }
}

export default function* watch() {
  yield all([takeEvery(actionTypes.GET_EMPLOYEES, fetchEmployees)]);
}
