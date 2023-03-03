import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

interface AuthState {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if (username && password) {
            this.login(username, password);
        }
    }
    set authState(value: AuthState | undefined) {
        this.authObservable.next(value);

        if (value?.password && value?.username) {
            localStorage.setItem('username', value?.username);
            localStorage.setItem('password', value?.password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    }
    get authState() {
        return this.authObservable.value;
    }

    authObservable = new BehaviorSubject<AuthState | undefined>(undefined);

    login(username: string, password: string) {
        this.authState = {
            username,
            password
        };
    }

    logout() {
        this.authState = undefined;
    }
}