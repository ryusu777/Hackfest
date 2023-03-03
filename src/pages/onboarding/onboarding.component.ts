import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth-service";

@Component({
    selector: 'onboarding',
    templateUrl: './onboarding.component.html'
})

export class OnBoardingPageComponent { 
    constructor(private authService: AuthService, private router: Router) { }
    pageNum: 1 | 2 = 1;
    model = {
        firstName: '',
        lastName: '',
        birthDate: '',
        nik: '',
        phone: '',
        email: '',
        password: ''
    };

    next() {
        this.pageNum = 2;
    }

    prev() {
        this.pageNum = 1;
    }

    submit() {
        this.authService.login(this.model.nik, this.model.password);
        this.router.navigate(['dashboard']);
    }

    back() {
        this.router.navigate(['']);
    }
}