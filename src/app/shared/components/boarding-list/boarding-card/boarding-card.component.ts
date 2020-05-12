import { Component, Input, Output, EventEmitter } from '@angular/core';
import { format } from 'date-fns';

import { Boarding } from '../../../models/boarding.model';

/** Component that displays a boarding card. */
@Component({
    selector: 'ns-boarding-card',
    templateUrl: './boarding-card.component.html',
    styleUrls: ['./boarding-card.component.scss'],
})
export class BoardingCardComponent {
    /** Boarding object to display on a card */
    @Input() boarding: Boarding;

    /** Event emitted when the boarding card is tapped. */
    @Output() boardingTap = new EventEmitter<Boarding>();

    /**
     * Formats dates in the correct format to display in the card.
     * @param date - the date to format.
     */
    formatDate(date: Date): string {
        return format(date, 'M/d/yyyy');
    }

    /** Boarding card tapped event handler. */
    onBoardingTap(): void {
        this.boardingTap.emit(this.boarding);
    }
}
