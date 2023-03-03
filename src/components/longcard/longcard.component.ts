import { Component, Input } from "@angular/core";

@Component({
    selector: 'longcard',
    templateUrl: './longcard.component.html'
})

export class LongCardComponent {
    @Input() type: 'basic' | 'primary' | 'compact' = 'compact';
    @Input() position: 'all-center' | 'basic' = 'basic';

    cardType = {
        'basic': '',
        'primary': 'bg-primary text-primary-content',
        'compact': 'card-compact '
    }

    positionType = {
        'basic': '',
        'all-center': 'items-center text-center'
    }
}