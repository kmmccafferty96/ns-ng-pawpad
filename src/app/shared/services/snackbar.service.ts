import { Injectable } from '@angular/core';
import { SnackBar, SnackBarOptions } from 'nativescript-material-snackbar';

/** Service for displaying a snackbar (toast) message */
@Injectable({ providedIn: 'root' })
export class SnackbarService {
    private _snackbar = new SnackBar();

    /** Displays a snackbar with a simple message and no action. */
    async showSimpleSnackbar(
        message: string,
        textColor?: string,
        backgroundColor?: string,
        maxLines?: number,
        isRTL?: boolean
    ): Promise<any> {
        return await this._snackbar.simple(message, textColor, backgroundColor, maxLines, isRTL);
    }

    /** Displays a snackbar with an action button. */
    async showActionSnackbar(options: SnackBarOptions): Promise<any> {
        return await this._snackbar.action(options);
    }
}
