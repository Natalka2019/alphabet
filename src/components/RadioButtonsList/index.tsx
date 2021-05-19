import React, { useState } from "react";
import styles from "./styles.module.css";
import RadioButton from "../RadioButton";

interface StatusOption {
  value: string;
  label: string;
}

interface Props {
  id: string;
  name: string;
  options: StatusOption[];
  onOptionChange: (selectedEl: string) => void;
  initialValue: StatusOption;
}

const RadioButtonList: React.FC<Props> = ({
  id,
  name,
  options,
  onOptionChange,
  initialValue,
}) => {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = (event: any) => {
    setChecked(event.target);
    onOptionChange(event.target.id);
  };

  return (
    <div className={styles.container}>
      {options.map((el) => {
        return (
          <RadioButton
            key={`${el.value}-${id}`}
            id={`${el.value}-${id}`}
            value={el.value}
            label={el.label}
            name={name}
            onRadioButtonChange={handleChange}
            isChecked={checked.value === el.value}
          />
        );
      })}
    </div>
  );
};

export default RadioButtonList;
