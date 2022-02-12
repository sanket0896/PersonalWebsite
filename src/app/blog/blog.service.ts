import { Injectable } from "@angular/core";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BlogDetail } from "src/app/shared/models/blog";

@Injectable()
export class BlogService {
  blogPosts$: Observable<BlogDetail[]> = (<Observable<ScullyRoute[]>>(
    (<any>this.scullyService.allRoutes$)
  )).pipe(
    map((routes: ScullyRoute[]) =>
      routes.filter(route => route.route.startsWith("/blog/"))
    ),
    map((routes: ScullyRoute[]) =>
      routes.map(route => ({
        title: route.title,
        description: route.description,
        creationDate: new Date(route.publishedOn),
        tags: route.tags.map(tag => ({ name: tag })),
        url: route.slug,
      }))
    )
  );

  constructor(private scullyService: ScullyRoutesService) {}
}
