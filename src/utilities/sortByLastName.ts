import {IUser} from '../models';

export const sortByLastName = (a: IUser, b: IUser) => {
  let lowerCaseA = a.lastName.toLowerCase();
  let lowerCaseB = b.lastName.toLowerCase();
  if (lowerCaseA < lowerCaseB) return -1;
  if (lowerCaseA > lowerCaseB) return 1;
  return 0;
};