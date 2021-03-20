import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./landing.component";
import { LinksModule } from "../shared/components/links/links.module";
import { SimpleTagModule } from "../shared/components/simple-tag/simple-tag.module";

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, LinksModule, SimpleTagModule],
})
export class LandingModule {}
