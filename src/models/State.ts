import { IEmployee } from "./IEmployee";

export type State = {
  employeesList: IEmployee[] | null;
  selectedList: IEmployee[];
};