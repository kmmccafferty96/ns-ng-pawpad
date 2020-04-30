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
    showAlert(options: AlertOptions): Promise<void> {
        return alert(options);
    }

    /** Displays a confirmation dialog. */
    showConfirm(options: ConfirmOptions): Promise<boolean> {
        return confirm(options);
    }

    /** Displays a prompt dialog. */
    showPrompt(options: PromptOptions): Promise<PromptResult> {
        return prompt(options);
    }

    /** Displays a login dialog. */
    showLogin(options: LoginOptions): Promise<LoginResult> {
        return login(options);
    }

    /** Displays an action dialog. */
    showAction(options: ActionOptions): Promise<string> {
        return action(options);
    }
}
