import { ExcelComponent } from "@core/ExelComponent";

export class Toolbar extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
    });
  }

  static className = "excel__toolbar";

  onClick(event) {
    console.log(event.target);
  }

  toHTML() {
    return `
    <div class="button">
      <i class="material-icons">format_align_left</i>
    </div>

    <div class="button">
      <i class="material-icons">format_align_center</i>
    </div>

    <div class="button">
      <i class="material-icons">format_align_right</i>
    </div>

    <div class="button">
      <i class="material-icons">format_bold</i>
    </div>

    <div class="button">
      <i class="material-icons">format_italic</i>
    </div>

    <div class="button">
      <i class="material-icons">format_underlined</i>
    </div>
  `;
  }
}
