import { Page } from '@nativescript/core/ui/page/page';

/** Base class for all pages in app */
export class PageBase {
    constructor(page: Page) {
        // Workaround for this issue https://github.com/NativeScript/nativescript-ui-feedback/issues/1362
        page.once(Page.navigatedToEvent, () => {
            page.frame.requestLayout();
        });
    }
}
