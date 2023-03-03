import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/services/auth-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(public authService: AuthService) { }
    title = 'HeaLink';

    isAuthenticated?: Observable<boolean>;

    ngOnInit(): void {
        this.isAuthenticated = this.authService
            .authObservable
            .pipe(
                map(e => e !== undefined)
            );
    }
}
