import { Component } from "@angular/core";
import { BLOG_LIST } from "../shared/constants/blog-list";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {
  readonly blogList = BLOG_LIST;
}
