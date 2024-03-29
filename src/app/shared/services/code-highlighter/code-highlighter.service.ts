import { Injectable, Inject } from "@angular/core";

import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import Prism from "prismjs";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
// check out node_modules/prismjs/components for more languages

@Injectable({ providedIn: "root" })
export class CodeHighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
