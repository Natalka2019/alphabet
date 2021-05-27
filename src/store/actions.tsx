import * as actionTypes from "./actionTypes";
import { IEmployee } from "../models";

export function getEmployees() {
  return {
    type: actionTypes.GET_EMPLOYEES,
  };
}

export function getEmployeesSuccess(payload: IEmployee[]) {
  return {
    type: actionTypes.GET_EMPLOYEES_SUCCESS,
    payload,
  };
}

export function getEmployeesFailed(payload: string) {
  return {
    type: actionTypes.GET_EMPLOYEES_FAILED,
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
