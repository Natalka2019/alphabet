import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { List, Selected } from "../../containers";
import * as actions from "../../store/actions";
import { State, IUser } from "../../models";
import { alphabet } from "../../utilities";
import { isConditionalExpression } from "typescript";

const Employees: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getUsers());
  }, [dispatch]);

  const usersList = useSelector((state: State) => state.usersList);

  const sortedUsersList = usersList?.sort((a: IUser, b: IUser) => {
    let lowerCaseA = a.lastName.toLowerCase();
    let lowerCaseB = b.lastName.toLowerCase();
    if (lowerCaseA < lowerCaseB) return -1;
    if (lowerCaseA > lowerCaseB) return 1;
    return 0;
  });

  // const groups = sortedUsersList?.reduce((acc: IList, val: IUser) => {
  //   let char: string = val.lastName.charAt(0);
  //   acc[char] = ([] as any).concat(acc[char] || [], val);
  //   return acc;
  // }, {});

  // const listToRender = { ...alphabet, ...groups };

  if (usersList === null) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingMessage}>
          Wait a moment. Data is loading ...
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.smallContainer}>
        <List list={sortedUsersList} />
      </div>
      <div className={styles.smallContainer}>
        <Selected />
      </div>
    </div>
  );
};

export default Employees;
