import React from "react";
import { render } from "@testing-library/react";
import NavigationButton from "./index";

test("renders navigation button", () => {
  render(
    <NavigationButton
      className={`styles.button`}
      title="Next"
      onClick={() => console.log("Click")}
    ></NavigationButton>
  );
});
