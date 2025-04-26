import { Component } from "../components/component.js";

export declare class ButtonComponent extends Component {
  constructor(
    label: string = "Button",
    isSubmit: boolean = false,
    id: string = generateId(8)
  ) {
    super();
    this.type = "button";
    this.label = label;
    this.id = id;
    this.isSubmit = isSubmit;
  }
}
