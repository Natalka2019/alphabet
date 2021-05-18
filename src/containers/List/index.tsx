import React, { useState } from "react";
import styles from "./styles.module.css";
import { IUser } from "../../models";
import { alphabet } from "../../utilities";

interface Props {
  list: IUser[] | undefined;
}

const List: React.FC<Props> = ({ list }) => {
  const [start, setStart] = useState(0);
  console.log(list);
  console.log(alphabet);

  const listToRender = alphabet.slice(start, start + 3);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Employees</div>
      <div className={styles.pagination}>
        {start > 2 && (
          <div
            className={styles.backButton}
            onClick={() => setStart(start - 3)}
          >
            Previous
          </div>
        )}
        {start < alphabet.length - 2 && (
          <div
            className={styles.forwardButton}
            onClick={() => setStart(start + 3)}
          >
            Next
          </div>
        )}
      </div>
      <ul className={styles.lettersContainer}>
        {listToRender.map((letter) => {
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
                        <li className={styles.nameContainer} key={id}>
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
