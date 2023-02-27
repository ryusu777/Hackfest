import { Component , Input} from "@angular/core";

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html'
})

export class PaginationComponent {
  @Input() size: 'extrasmall' | 'small' | 'default' | 'large' = 'default';
  @Input() status: 'active' | 'disabled' = 'active';

  paginationStatus = {
    'active': 'active',
    'disabled': 'disabled'
  }

  paginationSize = {
    'extrasmall': 'btn-xs',
    'small': 'btn-sm',
    'default': 'btn-md',
    'large': 'btn-lg'
  }
}
