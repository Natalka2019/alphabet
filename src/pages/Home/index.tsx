import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/employees" className={styles.link}>
        Employees
      </Link>
    </div>
  );
};

export default Home;
