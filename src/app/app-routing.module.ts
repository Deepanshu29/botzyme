import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServicesComponent } from "./view/services/services.component";
import { CareerComponent } from "./view/career/career.component";
import { HomeComponent } from "./view/home/home.component";
import { AboutUsComponent } from "./view/about-us/about-us.component";
import { ContactUsComponent } from "./view/contact-us/contact-us.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    pathMatch: "full",
  },
  /* {
    path: 'career',
    component: CareerComponent,
    pathMatch: 'full',
  }, */
  {
    path: "contact-us",
    component: ContactUsComponent,
    pathMatch: "full",
  },
  {
    path: "services",
    component: ServicesComponent,
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
