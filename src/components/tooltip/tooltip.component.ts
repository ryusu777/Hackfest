import { Component, Input } from "@angular/core";

@Component({
    selector: 'tooltip',
    templateUrl: './tooltip.component.html'
})

export class TooltipComponent {
    
    @Input() position: 'right' | 'bottom' | 'left' | 'top' = 'top'
    
    tipPosition = {
        'right': "tooltip-right",
        'bottom': "tooltip-bottom",
        'left': "tooltip-left",
        'top': "",
    }
}