import React from "react";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  value: string;
  label: string;
  name: string;
  isChecked: boolean;
  onRadioButtonChange: (event: React.FormEvent<HTMLInputElement>) => void;
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
