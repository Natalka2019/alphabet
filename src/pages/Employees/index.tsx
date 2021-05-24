import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { List, Selected } from "../../containers";
import * as actions from "../../store/actions";
import { State } from "../../models";
import { sortByLastName } from "../../utilities";
//import { IUser } from "../../models";

const Employees: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getUsers());
  }, [dispatch]);

  const usersList = useSelector((state: State) => state.usersList);

  const sortedUsersList = usersList?.sort(sortByLastName);

  // const groupedList = usersList?.reduce((acc: any, val: IUser) => {
  //   acc[val.lastName[0]] = ([] as any).concat(acc[val.lastName[0]] || [], val);
  //   acc[val.lastName[0]].sort(sortByLastName);

  //   return acc;
  // }, []);

  // console.log(groupedList);

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
        <div className={styles.sectionTitle}>
          <h2>Employees</h2>
        </div>
        <div className={styles.sectionContent}>
          <List list={sortedUsersList} />
          {/* <List list={groupedList} /> */}
        </div>
      </div>
      <div className={styles.smallContainer}>
        <div className={styles.sectionTitle}>
          <h2>Employees birthday</h2>
        </div>
        <div className={styles.sectionContent}>
          <Selected />
        </div>
      </div>
    </div>
  );
};

export default Employees;
