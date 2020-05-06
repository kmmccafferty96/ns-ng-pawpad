import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { TabSelectedEventData, BottomNavigationBar } from 'nativescript-material-bottomnavigationbar';

import { SideDrawerService } from '../shared/services/side-drawer.service';
import { PageURL } from '../shared/enums/page-url.enum';
import { PagesFacadeService } from './pages-facade.service';

@Component({
    selector: 'ns-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, AfterViewInit, OnDestroy {
    loading$ = this._facadeService.loading$;
    @ViewChild(RadSideDrawerComponent, { static: false })
    drawerComponent: RadSideDrawerComponent;
    @ViewChild('bottomNavigationBar', { read: ElementRef, static: false })
    bottomNavigationBar: ElementRef<BottomNavigationBar>;
    private _subscriptions = new Subscription();
    private _drawer: RadSideDrawer;
    private _pageIndexMap = [
        PageURL.Home.toString(),
        PageURL.Boarding.toString(),
        PageURL.LiveVideo.toString(),
        PageURL.Contact.toString(),
        PageURL.Services.toString(),
    ];

    // Assign enum to variable for use in the template
    pageUrl = PageURL;

    constructor(
        private _facadeService: PagesFacadeService,
        private _router: RouterExtensions,
        private _page: Page,
        private _route: ActivatedRoute,
        private _sideDrawerService: SideDrawerService,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this._page.actionBarHidden = true;

        this._subscriptions.add(
            this._sideDrawerService.drawerState.subscribe(() => {
                if (this._drawer) {
                    this.drawerComponent.sideDrawer.toggleDrawerState();
                }
            })
        );

        // Subscribe to route changes in order to update bottom navigation status
        this._subscriptions.add(
            this._router.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.selectTabByRouteString(event.url);
                }
            })
        );

        // Load init data
        this._facadeService.fetchBoardings();
        this._facadeService.fetchDaycare();
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

        if (prevUrl !== newUrl) {
            this.navigate(newUrl);
        }
    }

    onLogout() {
        this._sideDrawerService.toggleDrawer();
        this._facadeService.logout();
    }

    /**
     * This method doesn't do a whole lot - nothing actually. It's called on the tap event of
     * the GridLayout as a workaround to suppress any clicks behind it on Android.
     */
    // tslint:disable-next-line: no-empty
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

    ngOnDestroy(): void {
        if (this._subscriptions) {
            this._subscriptions.unsubscribe();
        }
    }
}
