import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { PAGES } from "./../../constant/pages.constant";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent{
    constructor(private authService: AuthService, private router: Router){}

    logout(): void {
        this.authService.logout();
        this.router.navigate([PAGES.login])
    }
}
