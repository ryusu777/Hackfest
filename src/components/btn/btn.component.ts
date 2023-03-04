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
        'secondary': 'bg-skyBlue text-white border-2 border-white hover:bg-white hover:text-skyBlue hover:border hover:border-white',
        'accent': 'btn-accent',
        'info': 'btn-info',
        'basic': 'bg-white text-skyBlue border-0 border-white hover:bg-skyBlue hover:text-white hover:border-2 hover:border-white'
    }
}