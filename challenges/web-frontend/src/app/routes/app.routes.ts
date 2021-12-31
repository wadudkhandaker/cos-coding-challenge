import { Routes } from '@angular/router';
import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { AuthGuardService } from './../services/auth-guard.service';
import { RouterData } from './../interfaces/router-data.interface';
import { PAGES } from "./../constant/pages.constant";

export const routes: Routes = [
    {
        path: "",
        redirectTo: `/${PAGES.login}`,
        pathMatch: "full",
    },
    {
      path: PAGES.login,
      loadChildren: () =>
        import("../modules/login/login.module").then((m) => m.LoginModule),
      data: {
        isPublic: true
      } as RouterData
    },
    {
      path: PAGES.auctions,
      loadChildren: () =>
        import("../modules/auctions/auctions.module").then((m) => m.AuctionsModule),
      canActivate: [AuthGuardService],
      data: {
        isPublic: false
      } as RouterData
    },
    {
      path: "404",
      component: NotFoundComponent,
      data: {
        isPublic: true
      } as RouterData
    },
    {
      path: "**",
      redirectTo: "/404"
    }
]