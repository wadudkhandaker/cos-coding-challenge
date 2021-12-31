import { Routes } from '@angular/router';
import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { AuthGuardService } from './../services/auth-guard.service';
import { RouterData } from './../interfaces/router-data.interface';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
    },
    {
      path: "login",
      loadChildren: () =>
        import("../modules/login/login.module").then((m) => m.LoginModule),
      data: {
        isPublic: true
      } as RouterData
    },
    {
      path: "auctions",
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