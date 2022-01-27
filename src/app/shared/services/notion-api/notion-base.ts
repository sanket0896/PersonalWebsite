import environment from "../environment/environment";

const { Client } = require("@notionhq/client");

export abstract class NotionBase {
  private _notion = new Client({ auth: environment.NOTION_API_KEY });

  protected get notionClient() {
    return this._notion;
  }
}
