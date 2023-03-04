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
    animations: [
        trigger('routerTransition', [
            transition('* <=> *', [    
                query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
                group([ 
                    query(':enter', [
                        style({ transform: 'translateX(100%)' }),
                        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                    ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
                ])
            ])
        ])
    ]
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
