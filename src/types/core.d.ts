export declare class FslJS {
  constructor();

  setConfig(
    config: Record<
      "appName" | "version" | "environment" | "author" | "description",
      string
    >
  ): this;
  getConfig(): this;
  $(element: string): this;
  setHTML(html: string): this;
  textContent(text: string): this;
  setAttributes(attributes: Record<string, string>): this;
}
