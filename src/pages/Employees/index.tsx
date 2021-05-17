import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { List, Selected } from "../../containers";
import * as actions from "../../store/actions";
import { State } from "../../models";

const Employees: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUsers());
  }, []);

  const usersList = useSelector((state: State) => state.usersList);

  console.log(usersList);
  return (
    <div className={styles.container}>
      <List />
      <Selected />
    </div>
  );
};

export default Employees;
