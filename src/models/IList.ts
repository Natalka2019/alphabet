import {IUser} from './IUser';

export interface IList {
  [key: string]: IUser[] | string[];
}