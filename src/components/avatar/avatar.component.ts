import { Component, Input } from "@angular/core";

@Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html'
})

export class AvatarComponent {
    @Input() type: 'round' | 'default' = 'default';
    @Input("w-32") w32?: '';
    @Input() round?: '';
    @Input() src!: string;

    avatarType = {
        'round': 'avatar-round',
        'default': ''
    }
}
