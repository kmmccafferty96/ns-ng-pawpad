import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Daycare } from '../../../shared/models/daycare.model';
import { DialogService } from '../../../shared/services/dialog.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';

/** Component that displays a current daycare card. */
@Component({
    selector: 'ns-current-daycare-card',
    templateUrl: './current-daycare-card.component.html',
    styleUrls: ['./current-daycare-card.component.scss'],
})
export class CurrentDaycareCardComponent {
    /** Current Daycare to display. */
    @Input() currentDaycare: Daycare;

    /** Event emitted when the toggle pickup status button is tapped. */
    @Output() pickupToggle = new EventEmitter<Daycare>();

    constructor(private _dialogService: DialogService, private _snackBarService: SnackBarService) {}

    /**
     * Emits the pickupToggle EventEmitter.
     * The pickup status is whether the owner is on their way to pickup their dog or not.
     */
    async onTogglePickupTap() {
        // If block is for true to false, else block is for false to true
        if (this.currentDaycare.pickupStatus) {
            // Ask user to confirm cancelling their pickup
            if (!(await this.confirmCancel())) {
                return;
            }
        } else {
            this._snackBarService.showSimpleSnackBar('We have been notified that you are on your way!');
        }

        this.pickupToggle.emit(this.currentDaycare);
    }

    /** Asks the user to confirm cancelling their pickup. */
    private confirmCancel() {
        return this._dialogService.showConfirm({
            title: 'Cancel Pickup?',
            message:
                'Are you sure you want to cancel your pickup? This status is used to let us know when you are on your way to pickup your dog(s).',
            okButtonText: 'Yes, cancel',
            cancelButtonText: 'No',
        });
    }
}
