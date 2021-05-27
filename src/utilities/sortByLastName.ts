import {IEmployee} from '../models';

export const sortByLastName = (a: IEmployee, b: IEmployee) => {
  let lowerCaseA = a.lastName.toLowerCase();
  let lowerCaseB = b.lastName.toLowerCase();
  if (lowerCaseA < lowerCaseB) return -1;
  if (lowerCaseA > lowerCaseB) return 1;
  return 0;
};