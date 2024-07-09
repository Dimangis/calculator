const createButton = (label, onClick) => ({ label, onClick });

// Функция для создания групп кнопок основного режима
export const buttonGroups = (
  handleSet,
  handleDelete,
  handleEvaluate,
  handleClear,
  toggleEngineerMode,
  isEngineerMode
) => [
  [
    createButton(isEngineerMode ? "🙂" : "⚙️", toggleEngineerMode),
    createButton("AC", handleClear),
    createButton("⌫", handleDelete),
    createButton(".", handleSet),
  ],
  [
    createButton("7", handleSet),
    createButton("8", handleSet),
    createButton("9", handleSet),
    createButton("/", handleSet),
  ],
  [
    createButton("4", handleSet),
    createButton("5", handleSet),
    createButton("6", handleSet),
    createButton("*", handleSet),
  ],
  [
    createButton("1", handleSet),
    createButton("2", handleSet),
    createButton("3", handleSet),
    createButton("+", handleSet),
  ],
  [
    createButton("00", handleSet),
    createButton("0", handleSet),
    createButton("=", handleEvaluate),
    createButton("-", handleSet),
  ],
];

// Функция для создания групп кнопок инженерного режима
export const createEngineerButtonGroups = (
  handleEngineerSet,
  handleEngineerGrade,
  handleEngineerLn
) => [
  [
    createButton("sin", handleEngineerSet),
    createButton("cos", handleEngineerSet),
    createButton("tan", handleEngineerSet),
    createButton("sqrt", handleEngineerSet),
  ],
  [
    createButton("π", handleEngineerSet),
    createButton("ln", handleEngineerLn),
    createButton("exp", handleEngineerSet),
    createButton("^", handleEngineerGrade),
  ],
];
