import { useState } from "react";
import { buttonGroups } from "./data";
import {
  handleSet,
  handleDelete,
  handleClear,
  handleEvaluate,
} from "./handlers";

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const buttons = buttonGroups(
    handleSet(setValue),
    handleDelete(setValue),
    handleEvaluate(setValue, value),
    handleClear(setValue)
  );

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          {buttons.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.map((button, buttonIndex) => (
                <input
                  key={buttonIndex}
                  type="button"
                  value={button.label}
                  onClick={button.onClick}
                />
              ))}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
