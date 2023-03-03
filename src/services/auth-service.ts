import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

interface AuthState {
    username: string;
    password: string;
}

@Injectable()
export class AuthService {
    set authState(value: AuthState | undefined) {
        this.authObservable.next(value);
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
}