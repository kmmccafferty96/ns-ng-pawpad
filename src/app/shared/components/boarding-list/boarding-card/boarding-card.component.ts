import { Component, Input, Output, EventEmitter } from '@angular/core';
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

    /** Event emitted when the boarding card is clicked. */
    @Output() boardingTap = new EventEmitter<Boarding>();

    /** Boarding card tapped event handler. */
    onBoardingTap() {
        this.boardingTap.emit(this.boarding);
    }
}
