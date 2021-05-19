import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { IUser } from "../../models";
import { alphabet } from "../../utilities";
import { RadioButtonsList } from "../../components";
import * as actions from "../../store/actions";

interface Props {
  list: IUser[] | undefined;
}

const List: React.FC<Props> = ({ list }) => {
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  console.log(list);
  console.log(alphabet);

  const listToRender = alphabet.slice(start, start + 3);
  const statusOptions = [
    {
      value: "true",
      label: "active",
    },
    {
      value: "false",
      label: "not active",
    },
  ];

  const handleOptionChange = (id: string) => {
    const status = id.split("-")[0];
    const employeeId = id.split("-")[1];
    if (status === "true") {
      dispatch(actions.addToSelectedList(employeeId));
    } else {
      dispatch(actions.removeFromSelectedList(employeeId));
    }
  };

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
                  <li>----</li>
                ) : (
                  list
                    ?.filter((employee) => employee.lastName[0] === letter)
                    .map(({ id, firstName, lastName }) => {
                      return (
                        <li className={styles.nameContainer} key={id}>
                          <div className={styles.name}>
                            {lastName} {firstName}
                          </div>
                          <RadioButtonsList
                            name={`${id}`}
                            id={`${id}`}
                            options={statusOptions}
                            onOptionChange={handleOptionChange}
                            initialValue={statusOptions[1]}
                          />
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
