import React from "react";
import { useSelector } from "react-redux";
import { State, IUser } from "../../models";
import styles from "./styles.module.scss";
import {
  sortByLastName,
  sortByMonth,
  getYear,
  getDayMonth,
} from "../../utilities";

const Selected: React.FC = () => {
  const selectedList = useSelector((state: State) => state.selectedList);
  const sortedList = selectedList?.sort(sortByMonth);

  const groups = sortedList?.reduce((acc: any, val: IUser) => {
    let date = new Date(val.dob);
    let month: string = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(date);
    acc[month] = ([] as any).concat(acc[month] || [], val);
    acc[month].sort(sortByLastName);

    return acc;
  }, []);

  console.log(groups);

  return (
    <div className={styles.container}>
      {selectedList?.length === 0 && (
        <div className={styles.noSelectedData}>Employees List is empty</div>
      )}
      <ul className={styles.monthsContainer}>
        {selectedList?.length > 0 &&
          Object.entries(groups).map(([key, value]) => (
            <li className={styles.monthContainer} key={key}>
              <div className={styles.monthTitle}>{key}</div>
              <ul className={styles.employeesList}>
                {(value as IUser[]).map((el: IUser) => (
                  <li key={el.id}>
                    {el.lastName} {el.firstName} - {getDayMonth(el.dob)},{" "}
                    {getYear(el.dob)} year
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Selected;
