import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef
} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { UIService } from "../shared/ui.service";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: "ns-pages",
    templateUrl: "./pages.component.html",
    styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent, { static: false })
    drawerComponent: RadSideDrawerComponent;
    private _drawerSub: Subscription;
    private _drawer: RadSideDrawer

    constructor(
        private _router: RouterExtensions,
        private _page: Page,
        private _route: ActivatedRoute,
        private _uiService: UIService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _authService: AuthService
    ) {}

    ngOnInit() {
        this._page.actionBarHidden = true;

        this._drawerSub = this._uiService.drawerState.subscribe(() => {
            if (this._drawer) {
                this.drawerComponent.sideDrawer.toggleDrawerState();
            }
        });
    }

    ngAfterViewInit() {
        this._drawer = this.drawerComponent.sideDrawer;

        this._changeDetectorRef.detectChanges();
    }

    navigate(url: string) {
        this._uiService.toggleDrawer();
        this._router.navigate([url], {
            transition: { name: "fade" },
            clearHistory: true,
            relativeTo: this._route
        });
    }

    onLogout() {
        this._uiService.toggleDrawer();
        this._authService.logout();
    }

    ngOnDestroy() {
        if (this._drawerSub) {
            this._drawerSub.unsubscribe();
        }
    }
}
