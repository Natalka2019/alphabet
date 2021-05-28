import React from "react";
import { render } from "@testing-library/react";
import RadioButton from "./index";

test("renders radio button", () => {
  render(
    <RadioButton
      id="1"
      value="yes"
      label="active"
      name="status"
      isChecked
      onRadioButtonChange={() => console.log("Change")}
    />
  );
});
