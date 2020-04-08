import { Component, Input } from '@angular/core';
import { Boarding } from '../../../../shared/models/boarding.interface';
import { BoardingService } from '../../../../shared/services/boarding.service';

/** Component that displays a boarding card */
@Component({
    selector: 'ns-boarding-card',
    templateUrl: './boarding-card.component.html',
    styleUrls: ['./boarding-card.component.scss'],
})
export class BoardingCard {
    /** Boarding object to display on a card */
    @Input() public boarding: Boarding;

    constructor(private _boardingService: BoardingService) {}

    /** Boarding card clicked event handler */
    onBoardingClicked() {
        this._boardingService.showBoardingActionsAsync(this.boarding);
    }
}
