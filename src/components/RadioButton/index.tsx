import React from "react";
import styles from "./styles.module.css";

interface Props {
  id: string;
  value: string;
  label: string;
  name: string;
  isChecked: boolean;
  onRadioButtonChange: (event: any) => void;
}

const RadioButton: React.FC<Props> = ({
  id,
  value,
  label,
  name,
  isChecked = false,
  onRadioButtonChange,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        checked={isChecked}
        onChange={onRadioButtonChange}
      ></input>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
