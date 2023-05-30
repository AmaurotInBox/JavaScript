import { capitalize } from "@core/util";
export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = this.getMethodName(listener);
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method].bind(this));
    });
  }
  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = this.getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }

  getMethodName(name) {
    return "on" + capitalize(name);
  }
}
