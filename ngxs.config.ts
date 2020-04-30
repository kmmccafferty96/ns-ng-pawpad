import { NgxsModuleOptions } from '@ngxs/store';

export const ngxsConfig: NgxsModuleOptions = {
    //developmentMode: !environment.production,
    selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
    },
    compatibility: {
        strictContentSecurityPolicy: true,
    },
};
