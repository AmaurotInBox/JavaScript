import $ from "@core/Dom";

export default function resize(event, $root) {
  if (event.target.dataset.resize) {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.coords;

    const type = $resizer.data.resize;

    let value;

    document.onmousemove = (e) => {
      if (type === "col") {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;

        $resizer.css({
          opacity: 1,
          zIndex: 1000,
          bottom: "-5000px",
          right: -delta + "px",
        });
      } else {
        const delta = e.pageY - coords.bottom;
        value = coords.height + delta;

        $resizer.css({
          opacity: 1,
          zIndex: 1000,
          right: "-5000px",
          bottom: -delta + "px",
        });
      }
    };

    document.onmouseup = () => {
      if (type === "col") {
        $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((el) => {
          $(el).css({ width: value + "px" });
        });
        $resizer.css({ opacity: 0, bottom: 0, right: "-4px" });
      } else {
        $root.findAll(`[data-row="${$parent.data.row}"]`).forEach((el) => {
          $(el).css({ height: value + "px" });
        });
        $resizer.css({ opacity: 0, bottom: 0, bottom: "-4px" });
      }

      document.onmousemove = null;
    };
  }
}
