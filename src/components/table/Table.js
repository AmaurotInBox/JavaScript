import { ExcelComponent } from "@core/ExelComponent";
import createTable from "@/components/table/table.template";
import resize from "./resize";

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
    resize(event, this.$root);
  }
}
