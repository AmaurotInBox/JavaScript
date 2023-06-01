const CODES = {
  A: "A".charCodeAt(),
  Z: "Z".charCodeAt(),
};

function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index ? index : ""}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function createCol(col) {
  return `<div class="column">${col}</div>`;
}

function createCell() {
  return `<div class="cell" contenteditable></div>`;
}

function createCharFromCharCode(_, num) {
  return String.fromCharCode(CODES.A + num);
}

export default function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill(null)
    .map(createCharFromCharCode)
    .map(createCol)
    .join("");

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill(null).map(createCell).join("");

    rows.push(createRow(i + 1, cells));
  }

  return rows.join("");
}
