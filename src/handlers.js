import { evaluate } from "mathjs";

export const handleSet = (setValue) => (e) => {
  setValue((prevValue) => prevValue + e.target.value);
};

export const handleDelete = (setValue) => () => {
  setValue((prevValue) => prevValue.slice(0, -1));
};

export const handleClear = (setValue) => () => {
  setValue("");
};

export const handleEvaluate = (setValue, value) => () => {
  try {
    const result = evaluate(value);
    setValue(String(result));
  } catch {
    setValue("Error");
  }
};

export const toggleEngineerMode = (setIsEngineerMode) => () => {
  setIsEngineerMode((prevMode) => !prevMode);
};

export const handleEngineerButtonClick = (setValue) => (e) => {
  const func = e.target.value;
  setValue((prevValue) => `${func}(${prevValue})`);
};

export const handleEngineerGrade = (setValue) => (e) => {
  const func = e.target.value;
  setValue((prevValue) => `${prevValue}${func}`);
};
