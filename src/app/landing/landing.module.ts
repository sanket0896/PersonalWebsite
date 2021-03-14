import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing/landing.component";
import { BlogComponent } from "./blog/blog.component";

@NgModule({
  declarations: [LandingComponent, BlogComponent],
  imports: [CommonModule],
})
export class LandingModule {}
