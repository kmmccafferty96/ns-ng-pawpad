import { Injectable } from '@angular/core';
import { SnackBar, SnackBarOptions } from 'nativescript-material-snackbar';

/** Service for displaying a Snack Bar (toast) message */
@Injectable({ providedIn: 'root' })
export class SnackBarService {
    private _snackBar = new SnackBar();

    /** Displays a Snack Bar with a simple message and no action. */
    showSimpleSnackBar(
        message: string,
        textColor?: string,
        backgroundColor?: string,
        maxLines?: number,
        isRTL?: boolean
    ): Promise<any> {
        return this._snackBar.simple(message, textColor, backgroundColor, maxLines, isRTL);
    }

    /** Displays a Snack Bar with an action button. */
    showActionSnackBar(options: SnackBarOptions): Promise<any> {
        return this._snackBar.action(options);
    }
}
