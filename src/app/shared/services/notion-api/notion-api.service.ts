import { Injectable } from "@angular/core";
import { NotionDatabase } from "./notion-db";

@Injectable({
  providedIn: "root",
})
export class NotionApiService {
  private _database = new NotionDatabase();

  public getDatabase(id: string) {
    return this._database.getDatabase(id);
  }
}
