import { useState } from "react";
import { buttonGroups, createEngineerButtonGroups } from "./data";
import {
  handleSet,
  handleDelete,
  handleClear,
  handleEvaluate,
  toggleEngineerMode,
  handleEngineerButtonClick,
  handleEngineerGrade,
} from "./handlers";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [isEngineerMode, setIsEngineerMode] = useState(false);

  const buttons = buttonGroups(
    handleSet(setValue),
    handleDelete(setValue),
    handleEvaluate(setValue, value),
    handleClear(setValue),
    toggleEngineerMode(setIsEngineerMode),
    isEngineerMode
  );

  const engineerButtons = createEngineerButtonGroups(
    handleEngineerButtonClick(setValue),
    handleEngineerGrade(setValue)
  );

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} onChange={handleChange} />
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
          {isEngineerMode &&
            engineerButtons.map((group, groupIndex) => (
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
