import {
  Component,
  ChangeDetectionStrategy,
  AfterViewChecked,
} from "@angular/core";
import { CodeHighlightService } from "src/app/shared/services/code-highlighter/code-highlighter.service";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent implements AfterViewChecked {
  constructor(private codeHighlighter: CodeHighlightService) {}

  ngAfterViewChecked() {
    /**
     * Scully does async update of the html content. We can't be guaranteed when the template html
     * is rendered. So using highlightAll() inside ngAfterViewChecked instead on ngAfterViewInit.
     * This won't affect much, as cd won't be running that frequently on this component.
     */
    this.codeHighlighter.highlightAll();
  }
}
