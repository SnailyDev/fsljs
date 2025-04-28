export interface ConfigProps {
  appName: string;
  version: string;
  description: string;
  license: string;
  licenseUrl?: string;
  repository?: string;
  repositoryUrl?: string;
  author: string;
}

export declare class FslJS {
  constructor();

  setConfig(config: ConfigProps): this;
  getConfig(): this;
  $(element: string): this;
  setHTML(html: string): this;
  textContent(text: string): this;
  setAttributes(attributes: Record<string, string>): this;
}
