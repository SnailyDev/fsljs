export class FslJS {
  constructor() {
    const configProps = {};
    const allowedKeys = [
      "appName",
      "version",
      "environment",
      "author",
      "description",
    ];
    this.elements = [];
  }

  setConfig(config) {
    for (let key in config) {
      if (!this.allowedKeys.includes(key)) {
        throw new Error(
          `Unknown configuration key: ${key}. Allowed configuration keys are: ${this.allowedKeys.join(
            ", "
          )}`
        );
      }
    }

    if (typeof config.appName !== "string") {
      throw new Error("appName must be a string");
    }

    if (typeof config.version !== "string") {
      throw new Error("version must be a string");
    }
    this.configProps = { ...config };

    return this;
  }

  getConfig() {
    for (let key in this.configProps) {
      console.log(`${key}: ${this.configProps[key]}`);
    }
    return this;
  }

  $(element) {
    this.elements = document.querySelectorAll(element); // Select all matching elements
    return this;
  }

  setHTML(html) {
    if (this.elements.length === 0) {
      console.warn("No elements selected. Ensure the selector is correct.");
      return this;
    }
    this.elements.forEach((el) => {
      el.innerHTML = html;
    });
    return this;
  }
  textContent(text) {
    if (this.elements.length === 0) {
      console.warn("No elements selected. Ensure the selector is correct.");
      return this;
    }
    this.elements.forEach((el) => {
      el.textContent = text;
    });
    return this;
  }
  setAttributes(attributes) {
    if (this.elements.length === 0) {
      console.warn("No elements selected. Ensure the selector is correct.");
      return this;
    }
    this.elements.forEach((el) => {
      for (let key in attributes) {
        el.setAttribute(key, attributes[key]);
      }
    });
    return this;
  }
}
