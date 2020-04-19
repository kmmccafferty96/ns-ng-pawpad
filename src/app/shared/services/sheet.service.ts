import { Injectable, Type } from '@angular/core';
import { BottomSheetService, BottomSheetOptions } from 'nativescript-material-bottomsheet/angular';
import { Observable } from 'rxjs';

/** Service for displaying a bottom sheet */
@Injectable({ providedIn: 'root' })
export class SheetService {
    constructor(private _bottomSheetService: BottomSheetService) {}

    /** Show a bottom sheet with the passed in component as the content. */
    show(component: Type<any>, options: BottomSheetOptions): Observable<any> {
        return this._bottomSheetService.show(component, options);
    }
}
