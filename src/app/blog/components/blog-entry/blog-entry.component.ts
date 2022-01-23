import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { BlogDetail } from "src/app/shared/models/blog";

@Component({
  selector: "app-blog-entry",
  templateUrl: "./blog-entry.component.html",
  styleUrls: ["./blog-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogEntryComponent implements OnInit {
  @Input()
  blog: BlogDetail;

  ngOnInit(): void {}
}
