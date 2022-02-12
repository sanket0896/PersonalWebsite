import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BLOG_LIST } from "src/app/shared/constants/blog-list";
import { BlogService } from "../../blog.service";

@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListComponent {
  readonly blogList$ = this.blogService.blogPosts$;

  constructor(private blogService: BlogService) {}
}
