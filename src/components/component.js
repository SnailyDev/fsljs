export class Component {
  constructor(elementType, element = document.createElement(elementType)) {
    this.element = element;
    this.isVisible = true;
    this.text = null;
    this.id;
  }
  toggleVisibility() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.element.style.display = "block";
    }
    else {
      this.element.style.display = "none";
    }
    return this;
  }

  setHTML(html) {
    if (this.element) {
      this.element.innerHTML = html;
    }
    return this;
  }
  textContent(text) {
    if (this.element) {
      this.element.textContent = text;
      this.text = text;
    }
    return this;
  }
}
