import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth-service";

@Component({
    selector: 'logout',
    template: ''
})
export class LogoutPageComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.authService.logout();
        this.router.navigate(['']);
    }
}