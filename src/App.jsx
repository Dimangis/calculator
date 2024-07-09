import { useState, useEffect } from "react";
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

  // Функция для вычисления размера шрифта
  const calculateFontSize = () => {
    const length = value.length;
    let fontSize = 40; // Размер шрифта по умолчанию

    if (length > 15) {
      fontSize = 20;
    } else if (length > 10) {
      fontSize = 24;
    }

    return `${fontSize}px`;
  };

  // Создание кнопок для базового и инженерного режима
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

  // Обработчик для ручного ввода в поле input
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Замена нескольких операторов на один
    const sanitizedValue = inputValue.replace(/([+\-*/^.]){2,}/g, "$1");
    setValue(sanitizedValue);
  };

  // Обработчик для нажатия клавиши "="
  const handleKeyPress = (e) => {
    if (e.key === "=" || e.key === "Enter") {
      e.preventDefault(); // Предотвращаем стандартное поведение клавиши Enter
      if (value !== "") handleEvaluate(setValue, value)();
    }
  };

  // Добавляем обработчик нажатия клавиш
  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              style={{ fontSize: calculateFontSize() }}
            />
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
          {isEngineerMode && (
            <div className="engineer-buttons">
              {engineerButtons.map((group, groupIndex) => (
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
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
