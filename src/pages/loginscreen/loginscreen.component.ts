import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth-service";

@Component({
    selector: 'login-page',
    templateUrl: './loginscreen.component.html'
})

export class LoginPageComponent
{ 
    constructor(private authService: AuthService, private router: Router) { }
    nik: string = "";
    password: string = "";

    login() {
        this.authService.login(this.nik, this.password);
        this.router.navigate(['dashboard']);
    }
}
