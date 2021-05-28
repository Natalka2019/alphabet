import React from "react";
import { render } from "@testing-library/react";
import RadioButtonList from "./index";

test("renders radio button", () => {
  render(
    <RadioButtonList
      id="1"
      name="status"
      onOptionChange={() => console.log("Change")}
      options={[
        {
          value: "true",
          label: "active",
        },
        {
          value: "false",
          label: "not active",
        },
      ]}
      initialValue={{
        value: "false",
        label: "not active",
      }}
    />
  );
});
