import { Component, Input } from "@angular/core";

@Component({
    selector: 'custom-table',
    templateUrl: './table.component.html'
})

export class TableComponent {
    @Input() type: 'compact' | 'zebra' | 'comzeb' | 'basic' = 'basic';

    tableType = {
        'compact': 'table-compact',
        'zebra': 'table-zebra',
        'comzeb': 'table-compact table-zebra',
        'basic': ''
    }
}