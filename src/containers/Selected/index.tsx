import React from "react";
import { useSelector } from "react-redux";
import { State, IUser } from "../../models";
import styles from "./styles.module.css";

const Selected: React.FC = () => {
  const selectedList = useSelector((state: State) => state.selectedList);

  console.log(selectedList);

  const currentMonth = new Date().getMonth();

  const sortedList = selectedList?.sort((a: any, b: any) => {
    let date1 = new Date(a.dob);
    let date2 = new Date(b.dob);

    let n1 = date1.getMonth();
    let n2 = date2.getMonth();
    if (n1 < currentMonth) {
      n1 = n1 + 12;
    }
    if (n2 < currentMonth) {
      n2 = n2 + 12;
    }
    return n1 - n2;
  });

  console.log(sortedList);

  const groups = sortedList?.reduce((acc: any, val: IUser) => {
    let date = new Date(val.dob);
    let month: string = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(date);
    acc[month] = ([] as any).concat(acc[month] || [], val);
    acc[month].sort(function sortByName(a: IUser, b: IUser) {
      let lowerCaseA = a.lastName.toLowerCase();
      let lowerCaseB = b.lastName.toLowerCase();
      if (lowerCaseA < lowerCaseB) return -1;
      if (lowerCaseA > lowerCaseB) return 1;
      return 0;
    });
    return acc;
  }, []);

  console.log(groups);

  const getLocalDate = (dob: any) => {
    const date = new Date(dob);
    return date.toLocaleString("en-UK", {
      day: "numeric",
      month: "long",
    });
  };
  const getYear = (dob: any) => {
    const date = new Date(dob);
    return date.toLocaleString("en-UK", {
      year: "numeric",
    });
  };

  return (
    <div className={styles.container}>
      <div>Employees birthday</div>
      {selectedList?.length === 0 && (
        <div className={styles.noSelectedData}>Employees List is empty</div>
      )}
      {selectedList?.length > 0 &&
        Object.entries(groups).map(([key, value]) => (
          <li key={key}>
            <div className={styles.monthTitle}>{key}</div>
            <ul>
              {(value as any).map((el: IUser) => (
                <li key={el.id}>
                  {el.lastName} {el.firstName} - {getLocalDate(el.dob)},{" "}
                  {getYear(el.dob)} year
                </li>
              ))}
            </ul>
          </li>
        ))}
    </div>
  );
};

export default Selected;
