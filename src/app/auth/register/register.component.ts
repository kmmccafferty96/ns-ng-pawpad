import { Component, OnInit } from "@angular/core";
import { themer } from "nativescript-material-core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions } from "nativescript-angular/router";

import { AuthService } from "../auth.service";

@Component({
    selector: "ns-register",
    templateUrl: "./register.component.html",
    styleUrls: ["../auth.component.scss", "./register.component.css"]
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    isLoading = false;
    firstNameControlIsValid = true;
    lastNameControlIsValid = true;
    emailControlIsValid = true;
    passwordControlIsValid = true;
    verifyPasswordControlIsValid = true;

    constructor(
        private authService: AuthService,
        private router: RouterExtensions
    ) {}

    ngOnInit() {
        themer.setPrimaryColor("#B6A168");

        this.form = new FormGroup({
            firstName: new FormControl(null, {
                updateOn: "change",
                validators: [Validators.required, Validators.minLength(1)]
            }),
            lastName: new FormControl(null, {
                updateOn: "change",
                validators: [Validators.required, Validators.minLength(1)]
            }),
            email: new FormControl(null, {
                updateOn: "change",
                validators: [Validators.required, Validators.email]
            }),
            password: new FormControl(null, {
                updateOn: "change",
                validators: [Validators.required, Validators.minLength(6)]
            }),
            verifyPassword: new FormControl(null, {
                updateOn: "change",
                validators: [Validators.required, Validators.minLength(6)]
            })
        });

        this.form.get("firstName").statusChanges.subscribe(status => {
            this.firstNameControlIsValid = status === "VALID";
        });

        this.form.get("lastName").statusChanges.subscribe(status => {
            this.lastNameControlIsValid = status === "VALID";
        });

        this.form.get("email").statusChanges.subscribe(status => {
            this.emailControlIsValid = status === "VALID";
        });

        this.form.get("password").statusChanges.subscribe(status => {
            this.passwordControlIsValid = status === "VALID";
        });

        this.form.get("verifyPassword").statusChanges.subscribe(status => {
            this.verifyPasswordControlIsValid = status === "VALID";
        });
    }

    onSubmit() {
        if (!this.form.valid) {
            return;
        }

        const firstName = this.form.get("firstName").value;
        const lastName = this.form.get("lastName").value;
        const email = this.form.get("email").value;
        const password = this.form.get("password").value;
        const verifyPassword = this.form.get("verifyPassword").value;

        this.isLoading = true;
        this.authService.signUp(firstName, lastName, email, password).subscribe(
            response => {
                this.isLoading = false;
                this.router.navigate(["/pages/home"], { clearHistory: true });
            },
            error => {
                this.isLoading = false;
            }
        );
    }
}
