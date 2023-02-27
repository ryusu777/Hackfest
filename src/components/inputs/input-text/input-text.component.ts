import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html'
})

export class InputTextComponent {
    @Input() label: string = "";
    @Input() value: string = "";
    @Output() valueChange = new EventEmitter<string>();

    emit(event: Event) {
        this.value = (event.target as HTMLInputElement).value;
        this.valueChange.emit(this.value);
    }
}
