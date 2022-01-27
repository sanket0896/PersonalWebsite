import { Component } from "@angular/core";
import { BLOG_LIST } from "../shared/constants/blog-list";
import { NotionApiService } from "../shared/services/notion-api/notion-api.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {
  readonly blogList = BLOG_LIST;
  constructor(private apiService: NotionApiService) {
    this.apiService
      .getDatabase("827a92af90ea488cb805468d69f88dff")
      .subscribe(res => {
        console.log(res);
      });
  }
}
