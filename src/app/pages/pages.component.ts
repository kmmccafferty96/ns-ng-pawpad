import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef,
    ElementRef
} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import {
    ActivatedRoute,
    Router,
    NavigationEnd,
} from "@angular/router";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { TabSelectedEventData, BottomNavigationBar } from "nativescript-material-bottomnavigationbar";

import { UIService } from "../shared/ui.service";
import { AuthService } from "../auth/auth.service";
import { PageURL } from "./helpers/enums/page-url.enum";

@Component({
    selector: "ns-pages",
    templateUrl: "./pages.component.html",
    styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent, { static: false })
    drawerComponent: RadSideDrawerComponent;
    @ViewChild('bottomNavigationBar', { read: ElementRef, static: false })
    bottomNavigationBar: ElementRef<BottomNavigationBar>;
    private _drawerSub: Subscription;
    private _drawer: RadSideDrawer;
    private _pageIndexMap = [
        PageURL.Home.toString(),
        PageURL.Booking.toString(),
        PageURL.Camera.toString(),
        PageURL.Services.toString(),
        PageURL.Contact.toString()
    ];

    // Assign enum to variable for use in the template
    pageUrl = PageURL;

    constructor(
        private _router: RouterExtensions,
        private _ngRouter: Router,
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

        this._ngRouter.events.subscribe((val: NavigationEnd) => {
            if (val instanceof NavigationEnd) {
                this.selectTabByRouteString(val.url);
            }
        });
    }

    ngAfterViewInit() {
        this._drawer = this.drawerComponent.sideDrawer;

        this._changeDetectorRef.detectChanges();
    }

    navigate(url: string) {
        if (this._drawer) {
            this.drawerComponent.sideDrawer.closeDrawer();
        }
        this._router.navigate([url], {
            transition: { name: "fade" },
            clearHistory: true,
            relativeTo: this._route
        });
    }

    onBottomNavigationBarLoaded() {
        if (this._router) {
            this.selectTabByRouteString(this._router.router.url.toString());
        }
    }

    onBottomNavigationTabSelected(event: TabSelectedEventData) {
        this.navigate(this._pageIndexMap[event.newIndex]);
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

    private selectTabByRouteString(route: string) {
        const path = this.cleanRouteString(route);
        const index = this._pageIndexMap.indexOf(path);

        this.bottomNavigationBar.nativeElement.selectTab(index);
    }

    private cleanRouteString(route: string) {
        if (route === "/pages") {
            return "";
        }

        return route.substring(route.lastIndexOf("/") + 1);
    }
}
