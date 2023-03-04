import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: './card.component.html'
})

export class CardComponent {
    @Input() type: 'basic' | 'primary' | 'compact' = 'compact';
    @Input() position: 'all-center' | 'basic' = 'basic';
    @Input() img?: string;

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