import { trigger, transition, query, style, group, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterOutletContract } from '@angular/router';
import { map, Observable } from 'rxjs';
import { slideBackAnimation, slideNextAnimation } from 'src/services/animation';
import { AuthService } from 'src/services/auth-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {
    constructor(public authService: AuthService) { }
    title = 'HeaLink';

    isAuthenticated?: Observable<boolean>;
    getState(outlet: RouterOutlet) {
        return outlet.activatedRouteData['state'];
    }

    ngOnInit(): void {
        this.isAuthenticated = this.authService
            .authObservable
            .pipe(
                map(e => e !== undefined)
            );
    }
}
