const createButton = (label, onClick) => ({ label, onClick });

export const buttonGroups = (
  handleSet,
  handleDelete,
  handleEvaluate,
  handleClear
) => [
  [
    createButton("AC", handleClear),
    createButton("⌫", handleDelete),
    createButton(".", handleSet),
    createButton("/", handleSet),
  ],
  [
    createButton("7", handleSet),
    createButton("8", handleSet),
    createButton("9", handleSet),
    createButton("*", handleSet),
  ],
  [
    createButton("4", handleSet),
    createButton("5", handleSet),
    createButton("6", handleSet),
    createButton("+", handleSet),
  ],
  [
    createButton("1", handleSet),
    createButton("2", handleSet),
    createButton("3", handleSet),
    createButton("-", handleSet),
  ],
  [
    createButton("00", handleSet),
    createButton("0", handleSet),
    createButton("=", handleEvaluate),
  ],
];
