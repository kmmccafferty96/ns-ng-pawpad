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
    PromptResult,
    LoginResult,
} from 'nativescript-material-dialogs';

/** Service for displaying a dialogs */
@Injectable({ providedIn: 'root' })
export class DialogService {
    /** Displays a simple alert dialog. */
    async showAlert(options: AlertOptions): Promise<void> {
        return await alert(options);
    }

    /** Displays a confirmation dialog. */
    async showConfirm(options: ConfirmOptions): Promise<boolean> {
        return await confirm(options);
    }

    /** Displays a prompt dialog. */
    async showPrompt(options: PromptOptions): Promise<PromptResult> {
        return await prompt(options);
    }

    /** Displays a login dialog. */
    async showLogin(options: LoginOptions): Promise<LoginResult> {
        return await login(options);
    }

    /** Displays an action dialog. */
    async showAction(options: ActionOptions): Promise<string> {
        return await action(options);
    }
}
