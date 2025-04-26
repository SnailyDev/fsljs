import { generateId } from "../utils/generateId.js";
export declare class Component {
  constructor(
    elementType: string,
    element: HTMLElement = document.createElement(elementType),
    id: string = generateId(8)
  ) {
    this.element = element;
    this.isVisible = true;
    this.text = null;
    this.id = id;
  }
  toggleVisibility(): this;
  setHTML(): this;
  textContent(): this;
}
