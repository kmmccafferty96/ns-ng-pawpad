import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    constructor(private page: Page) {}

    ngOnInit() {
        if (isAndroid) {
            this.page.actionBarHidden = true;
        }
    }
}
