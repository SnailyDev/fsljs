import { Component } from "./component.js";

export class ButtonComponent extends Component {
  constructor(label = "Button", isSubmit = false, id = generateId(8)) {
    super();
    this.type = "button";
    this.label = label;
    this.id = id;
    this.isSubmit = isSubmit;
  }
}
