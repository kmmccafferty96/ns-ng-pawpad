import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.scss', './login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
    private _subscriptions = new Subscription();
    form: FormGroup;
    isLoading = false;

    constructor(private _page: Page, private _authService: AuthService, private _router: RouterExtensions) {}

    ngOnInit() {
        if (isAndroid) {
            this._page.actionBarHidden = true;
        }

        this.form = new FormGroup({
            email: new FormControl(null, {
                updateOn: 'change',
                validators: [Validators.required],
            }),
            password: new FormControl(null, {
                updateOn: 'change',
                validators: [Validators.required],
            }),
        });
    }

    onSubmit() {
        if (!this.form.valid) {
            return;
        }

        const email = this.form.get('email').value;
        const password = this.form.get('password').value;

        this.isLoading = true;
        this._subscriptions.add(
            this._authService.login(email, password).subscribe(
                (response) => {
                    this.isLoading = false;
                    this._router.navigateByUrl('/pages', { clearHistory: true });
                },
                (error) => {
                    this.isLoading = false;
                }
            )
        );
    }

    ngOnDestroy(): void {
        if (this._subscriptions) {
            this._subscriptions.unsubscribe();
        }
    }
}
