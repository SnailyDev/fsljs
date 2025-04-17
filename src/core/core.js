"use strict";

const configProps = {};
const allowedKeys = [
  "appName",
  "version",
  "environment",
  "author",
  "description",
];
let elements = [];
export class FslJS {
  constructor() {
  }

  /**
   * Sets the configuration for FslJS.
   * @param {Object} config - The configuration object
   * @param {string} config.appName - The name of the app
   * @param {string} config.version - The version of the app
   * @param {string} config.environment - The environment (e.g., "production", "development")
   * @param {string} [config.author] - Optional field for the author of the app
   * @param {string} [config.description] - Optional description of the app
   * @returns {this} The instance of FslJS for chaining
   */

  setConfig(config) {
    for (let key in config) {
      if (!allowedKeys.includes(key)) {
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
    configProps = { ...config };

    return this;
  }

  getConfig() {
    for (let key in configProps) {
      console.log(`${key}: ${configProps[key]}`);
    }
    return this;
  }

  $(element) {
    elements = document.querySelectorAll(element); // Select all matching elements
    return this;
  }

  setHTML(html) {
    if (elements.length === 0) {
      console.warn("No elements selected. Ensure the selector is correct.");
      return this;
    }
    elements.forEach((el) => {
      el.innerHTML = html;
    });
    return this;
  }
  textContent(text) {
    if (elements.length === 0) {
      console.warn("No elements selected. Ensure the selector is correct.");
      return this;
    }
    elements.forEach((el) => {
      el.textContent = text;
    });
    return this;
  }
}
