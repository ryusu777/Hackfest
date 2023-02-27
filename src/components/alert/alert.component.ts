import { Component, Input } from "@angular/core";

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html'
})

export class AlertComponent {
    @Input() type: 'error' | 'info' | 'success' | 'warning' = 'info';

    alertType = {
        'error': 'alert-error',
        'info': 'alert-info',
        'success': 'alert-success',
        'warning': 'alert-warning'
    }
}