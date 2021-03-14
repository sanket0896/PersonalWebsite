import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./landing.component";
import { LinksModule } from "../shared/components/links/links.module";

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, LinksModule],
})
export class LandingModule {}
