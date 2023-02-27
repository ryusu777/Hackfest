import { Component , Input} from "@angular/core";

@Component({
    selector: 'bottomnavigation',
    templateUrl: './bottomnavigation.component.html'
})

export class BottomnavigationComponent {
  @Input() size: 'extrasmall' | 'small' | 'default' | 'large' = 'default';
  @Input() status: 'active' | 'disabled' = 'active';

  bottomnavigationStatus = {
    'active': 'active',
    'disabled': 'disabled'
  }

  bottomnavigationSize = {
    'extrasmall': 'btm-nav-xs',
    'small': 'btm-nav-sm',
    'default': 'btm-nav-md',
    'large': 'btm-nav-lg'
  }
}
