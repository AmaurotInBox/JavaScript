const CODES = {
  A: "A".charCodeAt(),
  Z: "Z".charCodeAt(),
};

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : 0;
  return `
    <div class="row" data-type="resizable" data-row="${index}">
      <div class="row-info">
        ${index ? index : ""}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function createCol(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>`;
}

function createCell(_, index) {
  return `<div class="cell" contenteditable data-col="${index}"></div>`;
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
