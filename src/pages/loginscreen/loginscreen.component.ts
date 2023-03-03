import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth-service";

@Component({
    selector: 'login-page',
    templateUrl: './loginscreen.component.html'
})

export class LoginPageComponent { 
    constructor(private authService: AuthService, private router: Router) { }
    username = "";
    password = "";

    login() {
        if (!this.username.length || !this.password.length) {
            return;
        }

        this.authService.login(this.username, this.password);
        this.router.navigate([''])
    }
}
