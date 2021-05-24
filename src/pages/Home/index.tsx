import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/employees" className={styles.link}>
        Visit Employees page
      </Link>
    </div>
  );
};

export default Home;
