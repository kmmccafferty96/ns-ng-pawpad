import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    constructor(private _router: RouterExtensions,) {}

    ngOnInit() { }

    test() {
        console.log("home clicked");
        this._router.navigate(["/pages/camera"]);
    }
}
