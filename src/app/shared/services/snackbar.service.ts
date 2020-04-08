import { Injectable } from '@angular/core';
import { SnackBar, SnackBarOptions } from 'nativescript-material-snackbar';

/** Service for displaying a Snack Bar (toast) message */
@Injectable({ providedIn: 'root' })
export class SnackBarService {
    private _snackBar = new SnackBar();

    /** Displays a Snack Bar with a simple message and no action. */
    async showSimpleSnackBar(
        message: string,
        textColor?: string,
        backgroundColor?: string,
        maxLines?: number,
        isRTL?: boolean
    ): Promise<any> {
        return await this._snackBar.simple(message, textColor, backgroundColor, maxLines, isRTL);
    }

    /** Displays a Snack Bar with an action button. */
    async showActionSnackBar(options: SnackBarOptions): Promise<any> {
        return await this._snackBar.action(options);
    }
}
