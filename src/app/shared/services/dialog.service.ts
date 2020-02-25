import { Injectable } from '@angular/core';
import {
    login,
    alert,
    prompt,
    confirm,
    action,
    AlertOptions,
    ConfirmOptions,
    PromptOptions,
    LoginOptions,
    ActionOptions,
} from 'nativescript-material-dialogs';

/** Service for displaying a dialogs */
@Injectable({ providedIn: 'root' })
export class DialogService {
    /** Displays a simple alert dialog. */
    async showAlert(options: AlertOptions): Promise<any> {
        return await alert(options);
    }

    /** Displays a confirmation dialog. */
    async showConfirm(options: ConfirmOptions): Promise<any> {
        return await confirm(options);
    }

    /** Displays a prompt dialog. */
    async showPrompt(options: PromptOptions): Promise<any> {
        return await prompt(options);
    }

    /** Displays a login dialog. */
    async showLogin(options: LoginOptions): Promise<any> {
        return await login(options);
    }

    /** Displays an action dialog. */
    async showAction(options: ActionOptions): Promise<any> {
        return await action(options);
    }
}
