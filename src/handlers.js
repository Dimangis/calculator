import { evaluate } from "mathjs";

const operators = ["+", "-", "*", "/", ".", "^"]; // Список операторов для проверки последовательности

// Обработчик для стандартных кнопок
export const handleSet = (setValue) => (e) => {
  const newValue = e.target.value;
  setValue((prev) => {
    const lastChar = prev.slice(-1);
    if (operators.includes(lastChar) && operators.includes(newValue)) {
      return prev.slice(0, -1) + newValue;
    }
    return prev + newValue;
  });
};

// Обработчик для удаления последнего символа
export const handleDelete = (setValue) => () => {
  setValue((prevValue) => prevValue.slice(0, -1));
};

// Обработчик для очистки ввода
export const handleClear = (setValue) => () => {
  setValue("");
};

// Обработчик для вычисления результата
export const handleEvaluate = (setValue, value) => () => {
  try {
    const result = evaluate(value);
    setValue(String(result));
  } catch {
    setValue("Error");
  }
};

// Обработчик для переключения инженерного режима
export const toggleEngineerMode = (setIsEngineerMode) => () => {
  setIsEngineerMode((prevMode) => !prevMode);
};

export const handleEngineerButtonClick = (setValue) => (e) => {
  // const func = e.target.value;
  // setValue((prevValue) => `${func}(${prevValue})`);
  const value = e.target.value;
  setValue((prev) => {
    switch (value) {
      case "π":
        // Проверяем, содержит ли предыдущая строка число PI и предотвращаем повторный ввод
        if (prev.includes(Math.PI.toString())) {
          return prev;
        }
        return prev + Math.PI;
      case "√":
        return `sqrt(${prev})`;
      case "ln":
        return `log(${prev})`;
      // Можно добавить обработчики для других инженерных функций
      case "sin":
      case "cos":
      case "tan":
      case "exp":
        return `${value}(${prev})`;
      default:
        return prev;
    }
  });
};

// Обработчик для возведения в степень
export const handleEngineerGrade = (setValue) => (e) => {
  const func = e.target.value;
  setValue((prev) => {
    const lastChar = prev.slice(-1);
    if (operators.includes(lastChar) && operators.includes(func)) {
      return prev.slice(0, -1) + func;
    }
    return prev + func;
  });
};
