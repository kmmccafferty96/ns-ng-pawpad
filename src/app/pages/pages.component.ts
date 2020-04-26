import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { TabSelectedEventData, BottomNavigationBar } from 'nativescript-material-bottomnavigationbar';

import { SideDrawerService } from '../shared/services/side-drawer.service';
import { AuthService } from '../auth/auth.service';
import { PageURL } from '../shared/enums/page-url.enum';
import { Acting } from '../shared/decorators/acting.decorator';
import { Loading } from '../shared/decorators/loading.decorator';

@Component({
    selector: 'ns-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, AfterViewInit, OnDestroy {
    @Acting() acting$;
    @Loading() loading$;
    @ViewChild(RadSideDrawerComponent, { static: false })
    drawerComponent: RadSideDrawerComponent;
    @ViewChild('bottomNavigationBar', { read: ElementRef, static: false })
    bottomNavigationBar: ElementRef<BottomNavigationBar>;
    private _routerSub: Subscription;
    private _drawerSub: Subscription;
    private _drawer: RadSideDrawer;
    private _pageIndexMap = [
        PageURL.Home.toString(),
        PageURL.Boarding.toString(),
        PageURL.Camera.toString(),
        PageURL.Contact.toString(),
        PageURL.Services.toString(),
    ];

    // Assign enum to variable for use in the template
    pageUrl = PageURL;

    constructor(
        private _router: RouterExtensions,
        private _page: Page,
        private _route: ActivatedRoute,
        private _sideDrawerService: SideDrawerService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _authService: AuthService
    ) {}

    ngOnInit() {
        this._page.actionBarHidden = true;

        this._drawerSub = this._sideDrawerService.drawerState.subscribe(() => {
            if (this._drawer) {
                this.drawerComponent.sideDrawer.toggleDrawerState();
            }
        });

        // Subscribe to route changes in order to update bottom navigation status
        this._routerSub = this._router.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.selectTabByRouteString(event.url);
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
            transition: { name: 'fade' },
            clearHistory: true,
            relativeTo: this._route,
        });
    }

    onBottomNavigationBarLoaded() {
        if (this._router) {
            this.selectTabByRouteString(this._router.router.url.toString());
        }
    }

    onBottomNavigationTabSelected(event: TabSelectedEventData) {
        const prevUrl = this.cleanRouteString(this._router.router.url);
        const newUrl = this._pageIndexMap[event.newIndex];

        if (prevUrl != newUrl) {
            this.navigate(newUrl);
        }
    }

    onLogout() {
        this._sideDrawerService.toggleDrawer();
        this._authService.logout();
    }

    ngOnDestroy() {
        if (this._drawerSub) {
            this._drawerSub.unsubscribe();
        }
        if (this._routerSub) {
            this._routerSub.unsubscribe();
        }
    }

    /**
     * This method doesn't do a whole lot - nothing actually. It's called on the tap event of
     * the GridLayout as a workaround to suppress any clicks behind it on Android.
     */
    doNothing() {}

    private selectTabByRouteString(route: string) {
        const path = this.cleanRouteString(route);
        const index = this._pageIndexMap.indexOf(path);

        this.bottomNavigationBar.nativeElement.selectTab(index);
    }

    private cleanRouteString(route: string) {
        if (route === '/pages') {
            return '';
        }

        route = route.replace('/pages/', '');

        const firstSlashIndex = route.indexOf('/');
        if (firstSlashIndex > -1) {
            route = route.substring(0, firstSlashIndex);
        }

        return route;
    }
}
