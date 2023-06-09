import "@/assets/style/index.scss";

import { Excel } from "@/components/exel/Excel";
import { Header } from "@/components/header/Header";
import { Toolbar } from "@/components/toolbar/Toolbar";
import { Formula } from "@/components/fomula/Formula";
import { Table } from "@/components/table/Table";

const excel = new Excel("#app", {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();
