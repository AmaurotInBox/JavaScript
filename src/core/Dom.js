class Dom {
  constructor(selector) {
    if (typeof selector === "string") {
      this.$el = document.querySelector(selector);
    } else {
      this.$el = selector;
    }
  }

  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html("");
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    this.$el.append(node);
    return this;
  }
}

export default function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  el.classList.add(classes);
  return $(el);
};
