import { Injectable } from "@angular/core";
import { defer, fromEvent, merge, Observable, Subject } from "rxjs";
import { filter, map, startWith } from "rxjs/operators";
import { KeyValuePair } from "../../models/util";

@Injectable({
  providedIn: "root",
})
export class BrowserStorageService {
  private _dummyLocalStorage: { [key: string]: string } = {};
  localStorageAvailable: boolean;

  private storageOperationsSub$: Subject<KeyValuePair> = new Subject();

  // Emits when any other tab of same domain updates local storage
  private windowStorageEvent$: Observable<KeyValuePair> = fromEvent(
    window,
    "storage"
  ).pipe(
    map((event: StorageEvent) => ({ key: event.key, value: event.newValue }))
  );

  // Emits when value for the given key is updated in local storage by current tab or any other tab
  public getItem$(key: string): Observable<string> {
    return defer(() =>
      merge(this.storageOperationsSub$, this.windowStorageEvent$).pipe(
        filter(op => op.key === key),
        map(op => op.value),
        startWith(this.getItem(key))
      )
    );
  }

  constructor() {
    try {
      localStorage.setItem("LS_CHK", "LS_CHK");
      this.localStorageAvailable = true;
      localStorage.removeItem("LS_CHK");
    } catch (e) {
      console.warn("Local Storage not available", e);
      this.localStorageAvailable = false;
    }
  }

  private _setValue(key: string, value: string) {
    if (this.localStorageAvailable) {
      localStorage.setItem(key, value);
    } else {
      this._dummyLocalStorage[key] = value;
    }
    this.storageOperationsSub$.next({ key, value });
  }

  private _getValue(key: string) {
    if (this.localStorageAvailable) {
      return localStorage.getItem(key);
    }
    // localstorage.getItem() returns null if key is not present or the stored value if it's present
    return this._dummyLocalStorage[key] ?? null;
  }

  private _clearValue(key: string) {
    if (this.localStorageAvailable) {
      localStorage.removeItem(key);
    } else {
      delete this._dummyLocalStorage[key];
    }
    this.storageOperationsSub$.next({ key, value: undefined });
  }

  /** Sets the Item. API Compatible with localStorage */
  public setItem(key: string, value: string) {
    this._setValue(key, value);
  }

  /** Gets the Item. API Compatible with localStorage */
  public getItem(key: string): string {
    return this._getValue(key);
  }

  /** Clears the Item. API Compatible with localStorage */
  public removeItem(key: string) {
    this._clearValue(key);
  }
}
