import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  onClick: (event: any) => void;
  className: string;
}

const NavigationButton: React.FC<Props> = ({ title, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default NavigationButton;
