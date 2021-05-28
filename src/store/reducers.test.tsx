import reducer from "./reducers";
import * as types from "./actionTypes";

describe("reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      employeesList: null,
      selectedList: [],
    });
  });

  test("should handle GET_EMPLOYEES_SUCCESS", () => {
    expect(
      reducer(
        {
          employeesList: null,
          selectedList: [],
        },
        {
          type: types.GET_EMPLOYEES_SUCCESS,
          payload: [
            {
              id: "5e00928d91e7feaa9872ec08",
              firstName: "Yang",
              lastName: "Carson",
              dob: "2019-02-26T16:52:36.244Z",
            },
            {
              id: "5e00928df892b0c84c82db9d",
              firstName: "Dorsey",
              lastName: "Meadows",
              dob: "2019-09-19T09:34:32.083Z",
            },
          ],
        }
      )
    ).toEqual({
      employeesList: [
        {
          id: "5e00928d91e7feaa9872ec08",
          firstName: "Yang",
          lastName: "Carson",
          dob: "2019-02-26T16:52:36.244Z",
        },
        {
          id: "5e00928df892b0c84c82db9d",
          firstName: "Dorsey",
          lastName: "Meadows",
          dob: "2019-09-19T09:34:32.083Z",
        },
      ],
      selectedList: [],
    });
  });

  test("first should handle ADD_TO_SELECTED_LIST", () => {
    expect(
      reducer(
        {
          employeesList: [
            {
              id: "5e00928d91e7feaa9872ec08",
              firstName: "Yang",
              lastName: "Carson",
              dob: "2019-02-26T16:52:36.244Z",
            },
            {
              id: "5e00928df892b0c84c82db9d",
              firstName: "Dorsey",
              lastName: "Meadows",
              dob: "2019-09-19T09:34:32.083Z",
            },
          ],
          selectedList: [],
        },
        {
          type: types.ADD_TO_SELECTED_LIST,
          payload: "5e00928d91e7feaa9872ec08",
        }
      )
    ).toEqual({
      employeesList: [
        {
          id: "5e00928d91e7feaa9872ec08",
          firstName: "Yang",
          lastName: "Carson",
          dob: "2019-02-26T16:52:36.244Z",
        },
        {
          id: "5e00928df892b0c84c82db9d",
          firstName: "Dorsey",
          lastName: "Meadows",
          dob: "2019-09-19T09:34:32.083Z",
        },
      ],
      selectedList: [
        {
          id: "5e00928d91e7feaa9872ec08",
          firstName: "Yang",
          lastName: "Carson",
          dob: "2019-02-26T16:52:36.244Z",
        },
      ],
    });
  });

  test("second should handle ADD_TO_SELECTED_LIST", () => {
    expect(
      reducer(
        {
          employeesList: [
            {
              id: "5e00928d91e7feaa9872ec08",
              firstName: "Yang",
              lastName: "Carson",
              dob: "2019-02-26T16:52:36.244Z",
            },
            {
              id: "5e00928df892b0c84c82db9d",
              firstName: "Dorsey",
              lastName: "Meadows",
              dob: "2019-09-19T09:34:32.083Z",
            },
          ],
          selectedList: [],
        },
        {
          type: types.ADD_TO_SELECTED_LIST,
          payload: "5e00928d91e7feaa9872ec",
        }
      )
    ).toEqual({
      employeesList: [
        {
          id: "5e00928d91e7feaa9872ec08",
          firstName: "Yang",
          lastName: "Carson",
          dob: "2019-02-26T16:52:36.244Z",
        },
        {
          id: "5e00928df892b0c84c82db9d",
          firstName: "Dorsey",
          lastName: "Meadows",
          dob: "2019-09-19T09:34:32.083Z",
        },
      ],
      selectedList: [],
    });
  });

  test("should handle REMOVE_FROM_SELECTED_LIST", () => {
    expect(
      reducer(
        {
          employeesList: [
            {
              id: "5e00928d91e7feaa9872ec08",
              firstName: "Yang",
              lastName: "Carson",
              dob: "2019-02-26T16:52:36.244Z",
            },
            {
              id: "5e00928df892b0c84c82db9d",
              firstName: "Dorsey",
              lastName: "Meadows",
              dob: "2019-09-19T09:34:32.083Z",
            },
          ],
          selectedList: [
            {
              id: "5e00928dea77bb8b9a15bdc2",
              firstName: "Roxanne",
              lastName: "Salas",
              dob: "2019-07-13T07:19:20.718Z",
            },
            {
              id: "5e00928db89ff9c2559f9560",
              firstName: "Watson",
              lastName: "Good",
              dob: "2019-05-09T03:24:32.532Z",
            },
          ],
        },
        {
          type: types.REMOVE_FROM_SELECTED_LIST,
          payload: "5e00928db89ff9c2559f9560",
        }
      )
    ).toEqual({
      employeesList: [
        {
          id: "5e00928d91e7feaa9872ec08",
          firstName: "Yang",
          lastName: "Carson",
          dob: "2019-02-26T16:52:36.244Z",
        },
        {
          id: "5e00928df892b0c84c82db9d",
          firstName: "Dorsey",
          lastName: "Meadows",
          dob: "2019-09-19T09:34:32.083Z",
        },
      ],
      selectedList: [
        {
          id: "5e00928dea77bb8b9a15bdc2",
          firstName: "Roxanne",
          lastName: "Salas",
          dob: "2019-07-13T07:19:20.718Z",
        },
      ],
    });
  });
});
