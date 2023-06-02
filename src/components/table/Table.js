import { ExcelComponent } from "@core/ExelComponent";
import createTable from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      listeners: ["mousedown"],
    });
  }

  toHTML() {
    return createTable(10);
  }
  onMousedown(event) {
    console.log(event.target);
  }
}
