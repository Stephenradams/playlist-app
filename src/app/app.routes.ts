import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "details/:id",
    loadComponent: () =>
      import("./pages/details/details.component").then(
        (m) => m.DetailsComponent
      ),
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];
