import { Component, Input } from "@angular/core";

@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.html'
})

export class CheckboxComponent {
    @Input() size: 'xs' | 'sm' | 'lg' | 'md' = 'md';

    checkSize = {
        'xs': 'checkbox-xs',
        'sm': 'checkbox-sm',
        'md': 'checkbox-md',
        'lg': 'checkbox-lg'
    }
}