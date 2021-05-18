import React from "react";
import styles from "./styles.module.css";
import { IUser } from "../../models";
import { alphabet } from "../../utilities";

interface Props {
  list: IUser[] | undefined;
}

const List: React.FC<Props> = ({ list }) => {
  console.log(list);
  console.log(alphabet);

  const b = list?.filter((employee) => employee.lastName[0] === "Y");

  console.log(b);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Employees</div>
      <ul>
        {alphabet.map((letter) => {
          return (
            <li key={letter}>
              <div className={styles.letter}>{letter}</div>
              <ul>
                {list?.filter((employee) => employee.lastName[0] === letter)
                  .length === 0 ? (
                  <div>----</div>
                ) : (
                  list
                    ?.filter((employee) => employee.lastName[0] === letter)
                    .map(({ id, firstName, lastName }) => {
                      return (
                        <li key={id}>
                          {lastName} {firstName}
                        </li>
                      );
                    })
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
