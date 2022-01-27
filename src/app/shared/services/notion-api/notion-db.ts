import { from, Observable } from "rxjs";
import { NotionBase } from "./notion-base";

export class NotionDatabase extends NotionBase {
  getDatabase(id: string): Observable<unknown> {
    return from(this.notionClient.databases.retrieve({ database_id: id }));
  }
}
