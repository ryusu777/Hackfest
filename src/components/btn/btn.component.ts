import { Component, Input } from '@angular/core';

@Component({
    selector: 'btn',
    templateUrl: './btn.component.html'
})

export class BtnComponent {
    @Input() type: 'primary' | 'secondary' | 'accent' | 'basic' | 'info' = 'basic';
    @Input() glassy?: '';
    @Input() sm?: '';
    @Input() full?: '';

    btnType = {
        'primary': 'btn-primary',
        'secondary': 'btn-secondary',
        'accent': 'btn-accent',
        'info': 'btn-info',
        'basic': ''
    }
}