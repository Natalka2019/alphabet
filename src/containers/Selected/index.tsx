import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../models";

const Selected: React.FC = () => {
  const selectedList = useSelector((state: State) => state.selectedList);

  console.log(selectedList);
  return <div>Employees birthday</div>;
};

export default Selected;
