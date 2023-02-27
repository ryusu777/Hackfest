import { Component , Input} from "@angular/core";

@Component({
    selector: 'toast',
    templateUrl: './toast.component.html'
})

export class ToastComponent {
    @Input() type: 'top' | 'start' | 'center' | 'end' | 'middle' | 'bottom' = 'bottom';

    toastType = {
      'top': 'toast-top',
      'start': 'toast-start',
      'center': 'toast-center',
      'end': 'toast-end',
      'middle': 'toast-middle',
      'bottom': ''
  }
}
