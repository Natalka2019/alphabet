import * as actions from "./actions";
import * as types from "./actionTypes";

describe("actions", () => {
  test("should create an action to trigger getting of employees", () => {
    const expectedAction = {
      type: types.GET_EMPLOYEES,
    };
    expect(actions.getEmployees()).toEqual(expectedAction);
  });
  test("should create an action to successfully get employees", () => {
    const payload = [
      {
        id: "5e00928df118c304a53244cc",
        firstName: "Melva",
        lastName: "Odom",
        dob: "2019-02-16T17:14:59.524Z",
      },
      {
        id: "5e00928d2049729b3a4db4be",
        firstName: "Elliott",
        lastName: "Sanchez",
        dob: "2019-09-30T21:19:54.862Z",
      },
    ];
    const expectedAction = {
      type: types.GET_EMPLOYEES_SUCCESS,
      payload,
    };
    expect(actions.getEmployeesSuccess(payload)).toEqual(expectedAction);
  });
  test("should create an action to failed get employees", () => {
    const payload = "Something is wrong";
    const expectedAction = {
      type: types.GET_EMPLOYEES_FAILED,
      payload,
    };
    expect(actions.getEmployeesFailed(payload)).toEqual(expectedAction);
  });
  test("should create an action to add to selected list", () => {
    const payload = "5e00928dea77bb8b9a15bdc2";
    const expectedAction = {
      type: types.ADD_TO_SELECTED_LIST,
      payload,
    };
    expect(actions.addToSelectedList(payload)).toEqual(expectedAction);
  });
  test("should create an action to remove selected list", () => {
    const payload = "5e00928dea77bb8b9a15bdc2";
    const expectedAction = {
      type: types.REMOVE_FROM_SELECTED_LIST,
      payload,
    };
    expect(actions.removeFromSelectedList(payload)).toEqual(expectedAction);
  });
});
