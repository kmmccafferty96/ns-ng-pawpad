import { Component, Input, Output, EventEmitter } from '@angular/core';
import { action } from 'tns-core-modules/ui/dialogs/dialogs';
import { RouterExtensions } from 'nativescript-angular/router';

import { Boarding } from '../../models/boarding.model';
import { PageURL } from '../../enums/page-url.enum';
import { DialogService } from '../../services/dialog.service';

/** Component that displays upcoming boarding in a list. */
@Component({
    selector: 'ns-boarding-list',
    templateUrl: './boarding-list.component.html',
    styleUrls: ['./boarding-list.component.scss'],
})
export class BoardingListComponent {
    /** Array of Boarding objects to display in the list. */
    @Input() boardings: Boarding[] = [];

    /** EventEmitter emitted when the user attempts to cancel a boarding. */
    @Output() boardingCancel = new EventEmitter<Boarding>();

    constructor(private _router: RouterExtensions, private _dialogService: DialogService) {}

    /**
     * Show an action sheet (iOS) or modal (Android) asking the user to Edit or Cancel the selected boarding.
     * @param boarding - The Boarding object to show the actions for.
     */
    async showBoardingActions(boarding: Boarding): Promise<void> {
        const response = await action({
            title: `Boarding scheduled from ${boarding.startDate.format('MM/DD/YYYY')} to ${boarding.endDate.format(
                'MM/DD/YYYY'
            )}`,
            cancelButtonText: 'Close',
            actions: ['Edit Boarding', 'Cancel Boarding'],
        });

        switch (response) {
            case 'Edit Boarding': {
                this._router.navigate([`/pages/${PageURL.Boarding}/edit`, '55'], {
                    transition: { name: 'slide' },
                });
                break;
            }
            case 'Cancel Boarding': {
                await this.cancelBoarding(boarding);
            }
        }
    }

    /**
     * Emit the EventEmitter to cancel the selected boarding.
     * @param boarding - The Boarding object to cancel.
     */
    async cancelBoarding(boarding: Boarding): Promise<void> {
        if (!(await this.confirmCancel(boarding))) {
            return;
        }

        this.boardingCancel.emit(boarding);
    }

    /**
     * Show a confimation modal for the boarding that the user is attempting to cancel.
     * @param boarding - The Boarding object to cancel.
     */
    private confirmCancel(boarding: Boarding): Promise<boolean> {
        return this._dialogService.showConfirm({
            title: 'Cancel Boarding?',
            message: `Are you sure you want to cancel your boarding scheduled from ${boarding.startDate.format(
                'MM/DD/YYYY'
            )} to ${boarding.endDate.format('MM/DD/YYYY')}?`,
            okButtonText: 'Yes, cancel',
            cancelButtonText: 'No',
        });
    }
}
