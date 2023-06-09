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

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
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

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  get coords() {
    return this.$el.getBoundingClientRect();
  }

  get data() {
    return this.$el.dataset;
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }
  css(style = {}) {
    for (const [property, value] of Object.entries(style)) {
      this.$el.style[property] = value;
    }
  }
}

$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  el.classList.add(classes);
  return $(el);
};

export default function $(selector) {
  return new Dom(selector);
}
